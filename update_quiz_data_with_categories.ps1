$content = Get-Content "d:\Study\CSDL\tn\q.txt" -Encoding UTF8
$jsContent = "const quizData = ["
$currentCategory = "General"
$id = 1

for ($i = 0; $i -lt $content.Count; $i++) {
    $line = $content[$i].Trim()
    
    # Detect Category Headers
    if ($line -match "^##\s*(.+)$") {
        $currentCategory = $matches[1].Trim()
        continue
    }

    # Detect Question
    if ($line -match '^-\s*Q\d+:\s*(.+)$') {
        $qText = $matches[1].Trim()
        
        # Find Answer (look ahead a few lines)
        $aText = ""
        for ($j = 1; $j -le 5; $j++) {
            if (($i + $j) -lt $content.Count) {
                $checkLine = $content[$i + $j].Trim()
                if ($checkLine -match '^\*\*Answer:\s*(.+?)\*\*$') {
                    $aText = $matches[1].Trim()
                    break
                }
            }
        }

        if ($qText -and $aText) {
            # Only remove leading answer prefix if followed by ) or . and a space
            # Pattern: starts with A-D or a-d, then ) or ., then a space
            if ($aText -match '^[A-Da-d][\)\.\)]\s+(.+)$') {
                $aText = $matches[1].Trim()
            }
            
             # Escape quotes
            $qEsc = $qText.Replace("\", "\\").Replace("'", "\'").Replace('"', '\"')
            $aEsc = $aText.Replace("\", "\\").Replace("'", "\'").Replace('"', '\"')
            $catEsc = $currentCategory.Replace("\", "\\").Replace("'", "\'").Replace('"', '\"')

            $jsContent += "{ id: $id, category: ""$catEsc"", question: ""$qEsc"", answer: ""$aEsc"" },"
            $id++
        }
    }
}
$jsContent += "];"

$jsContent | Set-Content "d:\Study\CSDL\tn\quiz_data.js" -Encoding UTF8
Write-Host "Regenerated quiz_data.js with categories. Total questions: $($id - 1)"
