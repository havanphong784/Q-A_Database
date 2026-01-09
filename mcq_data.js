// Multiple Choice Questions Data
const mcqData = [
    {
        id: 1,
        category: "Chapter 1: Introduction",
        question: "According to the slides, which of the following best describes a \"Database\"?",
        options: {
            A: "A special software application that interacts with users.",
            B: "A collection of information organized so that it can be easily accessed, managed, and updated.",
            C: "A set of integrity constraints buried in program code.",
            D: "A program that lets users create and administer data."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 2,
        category: "Chapter 1: Introduction",
        question: "What does DBMS stand for?",
        options: {
            A: "Data Backup Management Service",
            B: "Database Business Modeling System",
            C: "Database Management System",
            D: "Data Basic Maintenance Software"
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 3,
        category: "Chapter 1: Introduction",
        question: "Which of the following is NOT listed as a purpose or advantage of Database Systems compared to file processing systems?",
        options: {
            A: "To increase data redundancy and inconsistency.",
            B: "To prevent data from loss.",
            C: "To provide simultaneous access to data for many users.",
            D: "To delimit access to data for different users (Security)."
        },
        answer: "A",
        source: "Slide 7, 11"
    },
    {
        id: 4,
        category: "Chapter 1: Introduction",
        question: "In the context of database disadvantages, what does \"Data redundancy\" mean?",
        options: {
            A: "Data is lost during a power outage.",
            B: "Data is stored in multiple file formats resulting in duplication of information.",
            C: "It is difficult to add new constraints to the data.",
            D: "Multiple users are reading the same data at the same time."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 5,
        category: "Chapter 1: Introduction",
        question: "\"Transfer of funds from one account to another should either complete or not happen at all.\" This example illustrates which concept?",
        options: {
            A: "Data isolation",
            B: "Security problems",
            C: "Atomicity of updates",
            D: "Data redundancy"
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 6,
        category: "Chapter 1: Introduction",
        question: "Which level of data abstraction describes HOW the data are actually stored?",
        options: {
            A: "View level",
            B: "Logical level",
            C: "Physical level",
            D: "User level"
        },
        answer: "C",
        source: "Slide 18"
    },
    {
        id: 7,
        category: "Chapter 1: Introduction",
        question: "Which level of data abstraction describes WHAT data are stored in the database and the relationships among them?",
        options: {
            A: "View level",
            B: "Logical level",
            C: "Physical level",
            D: "Hardware level"
        },
        answer: "B",
        source: "Slide 18"
    },
    {
        id: 8,
        category: "Chapter 1: Introduction",
        question: "In the Relational Model, what is used to represent both data and the relationships among those data?",
        options: {
            A: "A collection of tables",
            B: "A hierarchical tree",
            C: "A set of objects",
            D: "A network graph"
        },
        answer: "A",
        source: "Slide 16"
    },
    {
        id: 9,
        category: "Chapter 1: Introduction",
        question: "Which of the following data models is mainly used for database design?",
        options: {
            A: "Relational model",
            B: "Entity-Relationship (ER) data model",
            C: "Network model",
            D: "Hierarchical model"
        },
        answer: "B",
        source: "Slide 15"
    },
    {
        id: 10,
        category: "Chapter 1: Introduction",
        question: "What is an RDBMS?",
        options: {
            A: "A program that lets users create, update, and administer a relational database.",
            B: "A collection of conceptual tools for describing data semantics.",
            C: "A system solely for backing up files.",
            D: "A type of hardware used to store large collections of data."
        },
        answer: "A",
        source: "Slide 19"
    },
    // Chapter 2: Database Design & ER Model
    {
        id: 11,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which phase of the database design process involves constructing an Entity Relationship Model (ERM) that is independent of any particular DBMS?",
        options: {
            A: "Physical Design",
            B: "Logical Design",
            C: "Conceptual Design",
            D: "Requirements Analysis"
        },
        answer: "C",
        source: "Slide 6, 37"
    },
    {
        id: 12,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the context of database design, what does \"Logical Design\" primarily involve?",
        options: {
            A: "Creating the internal schema and file organization.",
            B: "Mapping the conceptual model to a specific data model (e.g., Relational) of the chosen DBMS.",
            C: "Collecting user requirements.",
            D: "Writing SQL queries."
        },
        answer: "B",
        source: "Slide 8, 352"
    },
    {
        id: 13,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is an \"Entity\" in the ER model?",
        options: {
            A: "A specific database table row.",
            B: "A person, place, object, event, or concept in the user environment about which the organization wishes to maintain data.",
            C: "A relationship between two tables.",
            D: "A characteristic or property of a user."
        },
        answer: "B",
        source: "Slide 12, 385"
    },
    {
        id: 14,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which of the following best describes a \"Weak Entity\"?",
        options: {
            A: "An entity that has too many attributes.",
            B: "An entity that can exist independently of other entities.",
            C: "An entity whose existence depends on another entity (identifying owner) and does not have a full identifier of its own.",
            D: "An entity that participates in a many-to-many relationship."
        },
        answer: "C",
        source: "Slide 16, 431"
    },
    {
        id: 15,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which type of attribute can be divided into smaller subparts (e.g., Address divided into Street, City, State)?",
        options: {
            A: "Simple Attribute",
            B: "Composite Attribute",
            C: "Derived Attribute",
            D: "Multivalued Attribute"
        },
        answer: "B",
        source: "Slide 26, 550"
    },
    {
        id: 16,
        category: "Chapter 2: Database Design & ER Model",
        question: "An attribute that can be calculated from other attributes (e.g., calculating \"Age\" from \"Date of Birth\") is called a:",
        options: {
            A: "Stored Attribute",
            B: "Key Attribute",
            C: "Derived Attribute",
            D: "Multivalued Attribute"
        },
        answer: "C",
        source: "Slide 31, 610"
    },
    {
        id: 17,
        category: "Chapter 2: Database Design & ER Model",
        question: "How is a \"Multivalued Attribute\" typically represented in the notation described in the slides (or conceptualized)?",
        options: {
            A: "By a dashed line.",
            B: "By a double oval or curly braces { }.",
            C: "By a rectangle.",
            D: "By a diamond shape."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 18,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is a \"Recursive Relationship\" (or Unary Relationship)?",
        options: {
            A: "A relationship between two different entity types.",
            B: "A relationship where an entity is related to itself (the same entity type).",
            C: "A relationship involving three different entity types.",
            D: "A relationship that no longer exists."
        },
        answer: "B",
        source: "Slide 40, 753"
    },
    {
        id: 19,
        category: "Chapter 2: Database Design & ER Model",
        question: "In a binary relationship, if an entity in set A is associated with any number of entities in set B, and an entity in set B is associated with at most one entity in set A, the cardinality is:",
        options: {
            A: "One-to-One (1:1)",
            B: "One-to-Many (1:N)",
            C: "Many-to-Many (M:N)",
            D: "Zero-to-Zero"
        },
        answer: "B",
        source: "Slide 44, 813"
    },
    {
        id: 20,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is an \"Associative Entity\" (or Gerund)?",
        options: {
            A: "An entity that replaces a many-to-many relationship and contains attributes specific to that relationship.",
            B: "A weak entity that has no owner.",
            C: "A supertype entity.",
            D: "An attribute that acts like an entity."
        },
        answer: "A",
        source: "Slide 38, 727"
    },
    {
        id: 21,
        category: "Chapter 2: Database Design & ER Model",
        question: "What does \"Mandatory Participation\" (Total Participation) mean?",
        options: {
            A: "The minimum cardinality is zero.",
            B: "Only some entity occurrences participate in the relationship.",
            C: "All entity occurrences must participate in the relationship (Minimum cardinality is one).",
            D: "The maximum cardinality is many."
        },
        answer: "C",
        source: "Slide 49, 875"
    },
    {
        id: 22,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the Enhanced Entity Relationship (EER) model, what is \"Generalization\"?",
        options: {
            A: "A Top-Down process of defining subtypes from a supertype.",
            B: "A Bottom-Up process of defining a more general entity type from a set of specialized entity types.",
            C: "The process of deleting entities.",
            D: "The process of normalizing tables."
        },
        answer: "B",
        source: "Slide 68, 1137"
    },
    {
        id: 23,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is the property that enables an entity subtype to inherit attributes and relationships from its supertype?",
        options: {
            A: "Specialization",
            B: "Aggregation",
            C: "Inheritance",
            D: "Segmentation"
        },
        answer: "C",
        source: "Slide 66, 1112"
    },
    {
        id: 24,
        category: "Chapter 2: Database Design & ER Model",
        question: "If a supertype instance must be a member of at least one subtype, this is known as:",
        options: {
            A: "Partial Completeness Rule",
            B: "Total Completeness Rule",
            C: "Disjoint Rule",
            D: "Overlap Rule"
        },
        answer: "B",
        source: "Slide 73, 1220"
    },
    {
        id: 25,
        category: "Chapter 2: Database Design & ER Model",
        question: "If a supertype instance can belong to more than one subtype simultaneously, which constraint applies?",
        options: {
            A: "Disjoint Rule",
            B: "Overlap Rule",
            C: "Partial Rule",
            D: "Mandatory Rule"
        },
        answer: "B",
        source: "Slide 77, 1274"
    },
    {
        id: 26,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which symbol is used to represent the \"Disjoint\" constraint in an EER diagram?",
        options: {
            A: "The letter \"o\" inside the circle.",
            B: "The letter \"d\" inside the circle.",
            C: "A double line.",
            D: "A single line."
        },
        answer: "B",
        source: "Slide 77, 1274"
    },
    {
        id: 27,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which attribute type is indicated by a double underline in the text's notation (typically associated with weak entities)?",
        options: {
            A: "Primary Identifier",
            B: "Partial Identifier",
            C: "Composite Attribute",
            D: "Derived Attribute"
        },
        answer: "B",
        source: "Slide 17, 440"
    },
    {
        id: 28,
        category: "Chapter 2: Database Design & ER Model",
        question: "What is the \"Degree\" of a relationship?",
        options: {
            A: "The number of attributes in the relationship.",
            B: "The number of entity types that participate in the relationship.",
            C: "The number of rows in the table.",
            D: "The cardinality ratio."
        },
        answer: "B",
        source: "Slide 40, 751"
    },
    {
        id: 29,
        category: "Chapter 2: Database Design & ER Model",
        question: "Which of the following is an example of a Ternary relationship?",
        options: {
            A: "Employee supervises Employee.",
            B: "Student takes Class.",
            C: "Employee works on Project using a Skill (Three entities associated).",
            D: "Customer places Order."
        },
        answer: "C",
        source: "Slide 40, 755"
    },
    {
        id: 30,
        category: "Chapter 2: Database Design & ER Model",
        question: "In the Crow's Foot notation, what does a circle on the relationship line usually indicate?",
        options: {
            A: "Mandatory participation (Minimum 1).",
            B: "Optional participation (Minimum 0).",
            C: "A primary key.",
            D: "A derived attribute."
        },
        answer: "B",
        source: "Slide 46, 833"
    },
    // Chapter 2: Relational Algebra
    {
        id: 31,
        category: "Chapter 2: Relational Algebra",
        question: "What is Relational Algebra?",
        options: {
            A: "A procedural query language used to define valid SQL syntax.",
            B: "A set of operations that take one or two relations as input and produce a new relation as their result.",
            C: "A graphical representation of database tables.",
            D: "A method for normalizing database tables."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 32,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is classified as a Unary Operation in Relational Algebra?",
        options: {
            A: "Union (∪)",
            B: "Cartesian Product (×)",
            C: "Select (σ)",
            D: "Join (⋈)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 33,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is classified as a Binary Operation?",
        options: {
            A: "Rename (ρ)",
            B: "Project (Π)",
            C: "Select (σ)",
            D: "Union (∪)"
        },
        answer: "D",
        source: "Slide 3"
    },
    {
        id: 34,
        category: "Chapter 2: Relational Algebra",
        question: "The Select operation is denoted by which Greek letter?",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Rho (ρ)",
            D: "Lambda (λ)"
        },
        answer: "A",
        source: "Slide 3, 5"
    },
    {
        id: 35,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Select (σ) operation?",
        options: {
            A: "To select certain columns from a table and discard others.",
            B: "To select tuples (rows) that satisfy a given predicate.",
            C: "To combine two relations into one.",
            D: "To rename attributes in a relation."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 36,
        category: "Chapter 2: Relational Algebra",
        question: "The Project operation is denoted by which Greek letter?",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Omega (Ω)",
            D: "Theta (θ)"
        },
        answer: "B",
        source: "Slide 3, 9"
    },
    {
        id: 37,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Project (Π) operation?",
        options: {
            A: "To select certain columns from the table and discard the other columns.",
            B: "To filter rows based on a condition.",
            C: "To join two tables based on a common key.",
            D: "To perform mathematical calculations on data."
        },
        answer: "A",
        source: "Slide 9"
    },
    {
        id: 38,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following statements about the Project operation is TRUE?",
        options: {
            A: "It returns all rows including duplicates.",
            B: "Duplicate rows are removed from the result, since relations are sets.",
            C: "It operates on two relations simultaneously.",
            D: "It is denoted by the symbol σ."
        },
        answer: "B",
        source: "Slide 9"
    },
    {
        id: 39,
        category: "Chapter 2: Relational Algebra",
        question: "In the Select operation, which logical connectives can be used to combine predicates?",
        options: {
            A: "IF, THEN, ELSE",
            B: "AND (∧), OR (∨), NOT (¬)",
            C: "UNION, INTERSECT, MINUS",
            D: "XOR, NAND, NOR"
        },
        answer: "B",
        source: "Slide 7"
    },
    {
        id: 40,
        category: "Chapter 2: Relational Algebra",
        question: "Which comparison operators are allowed in the Selection predicate?",
        options: {
            A: "only = and ≠",
            B: "=, ≠, <, ≤, >, ≥",
            C: "only < and >",
            D: "==, !=, <>, ><"
        },
        answer: "B",
        source: "Slide 7"
    },
    {
        id: 41,
        category: "Chapter 2: Relational Algebra",
        question: "How would you represent a query to find instructors in the \"Physics\" department with a salary greater than $90,000?",
        options: {
            A: "σ_dept_name=\"Physics\" ∨ salary > 90000 (instructor)",
            B: "Π_dept_name=\"Physics\" ∧ salary > 90000 (instructor)",
            C: "σ_dept_name=\"Physics\" ∧ salary > 90000 (instructor)",
            D: "instructor × σ_salary > 90000"
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 42,
        category: "Chapter 2: Relational Algebra",
        question: "The Rename operation is denoted by which symbol?",
        options: {
            A: "σ",
            B: "Π",
            C: "ρ (rho)",
            D: "δ"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 43,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is used to combine two relations by including all tuples from both relations (removing duplicates)?",
        options: {
            A: "Intersection (∩)",
            B: "Set Difference (−)",
            C: "Union (∪)",
            D: "Selection (σ)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 44,
        category: "Chapter 2: Relational Algebra",
        question: "Which symbol represents the Cartesian Product operation?",
        options: {
            A: "×",
            B: "÷",
            C: "+",
            D: "*"
        },
        answer: "A",
        source: "Slide 3"
    },
    {
        id: 45,
        category: "Chapter 2: Relational Algebra",
        question: "If relation R has 5 rows and relation S has 3 rows, how many rows will the Cartesian Product R × S have?",
        options: {
            A: "8",
            B: "15",
            C: "2",
            D: "5"
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 46,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation returns tuples that are present in one relation but NOT in another?",
        options: {
            A: "Union (∪)",
            B: "Intersection (∩)",
            C: "Set Difference (−)",
            D: "Cartesian Product (×)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 47,
        category: "Chapter 2: Relational Algebra",
        question: "The Intersection (∩) operation returns:",
        options: {
            A: "All tuples from both relations.",
            B: "Tuples that are common to both relations.",
            C: "Tuples unique to the first relation.",
            D: "Tuples unique to the second relation."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 48,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is NOT a fundamental unary operation?",
        options: {
            A: "Rename",
            B: "Project",
            C: "Union",
            D: "Select"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 49,
        category: "Chapter 2: Relational Algebra",
        question: "When performing a Project operation like Π_ID, name, salary (instructor), what happens to the dept_name column?",
        options: {
            A: "It is included in the result but empty.",
            B: "It is used for sorting.",
            C: "It is erased/discarded from the result.",
            D: "It is renamed to ID."
        },
        answer: "C",
        source: "Slide 10"
    },
    {
        id: 50,
        category: "Chapter 2: Relational Algebra",
        question: "Relational algebra operations can be composed. This means:",
        options: {
            A: "The result of one operation can be used as input for another operation.",
            B: "You can only perform one operation at a time.",
            C: "Operations must be performed in alphabetical order.",
            D: "Only binary operations can be combined."
        },
        answer: "A",
        source: "Slide 11"
    },
    // Chapter 2: Relational Algebra - Practice Questions
    {
        id: 51,
        category: "Chapter 2: Relational Algebra",
        question: "Relational algebra is a __________ query language.",
        options: {
            A: "Object-oriented",
            B: "Procedural",
            C: "Non-procedural",
            D: "Declarative"
        },
        answer: "B",
        source: "Slide 1"
    },
    {
        id: 52,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is NOT one of the six basic operators of relational algebra?",
        options: {
            A: "Select (σ)",
            B: "Project (Π)",
            C: "Join (⋈)",
            D: "Union (∪)"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 53,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following operations is classified as a \"Unary Operation\"?",
        options: {
            A: "Union (∪)",
            B: "Cartesian product (×)",
            C: "Set difference (−)",
            D: "Select (σ)"
        },
        answer: "D",
        source: "Slide 3"
    },
    {
        id: 54,
        category: "Chapter 2: Relational Algebra",
        question: "The Select operation is denoted by which Greek letter?",
        options: {
            A: "Rho (ρ)",
            B: "Sigma (σ)",
            C: "Pi (Π)",
            D: "Lambda (λ)"
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 55,
        category: "Chapter 2: Relational Algebra",
        question: "What is the primary function of the Select operation?",
        options: {
            A: "To combine two relations.",
            B: "To select tuples (rows) that satisfy a given predicate.",
            C: "To rename attributes in a relation.",
            D: "To select specific columns and discard others."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 56,
        category: "Chapter 2: Relational Algebra",
        question: "In the expression σ_p(r), what does p represent?",
        options: {
            A: "The name of the relation.",
            B: "The projection list.",
            C: "The selection predicate.",
            D: "The primary key."
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 57,
        category: "Chapter 2: Relational Algebra",
        question: "Which logical connectives can be used to combine predicates in the Select operation?",
        options: {
            A: "∧ (and), ∨ (or), ¬ (not)",
            B: "∩ (intersection), ∪ (union)",
            C: "+ (plus), − (minus)",
            D: "∈ (in), ∉ (not in)"
        },
        answer: "A",
        source: "Slide 7"
    },
    {
        id: 58,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is denoted by the Greek letter Pi (Π)?",
        options: {
            A: "Selection",
            B: "Projection",
            C: "Cartesian Product",
            D: "Rename"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 59,
        category: "Chapter 2: Relational Algebra",
        question: "The Project operation allows you to:",
        options: {
            A: "Select rows based on a condition.",
            B: "Combine data from two tables.",
            C: "Select certain columns (attributes) and discard the others.",
            D: "Rename the relation."
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 60,
        category: "Chapter 2: Relational Algebra",
        question: "How does the Project operation handle duplicate rows in the result?",
        options: {
            A: "It keeps all duplicates.",
            B: "It removes duplicate rows since relations are sets.",
            C: "It returns an error if duplicates exist.",
            D: "It asks the user what to do."
        },
        answer: "B",
        source: "Slide 10"
    },
    {
        id: 61,
        category: "Chapter 2: Relational Algebra",
        question: "The result of a relational algebra operation is always:",
        options: {
            A: "A single value.",
            B: "A list of variables.",
            C: "A relation (table).",
            D: "A graph."
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 62,
        category: "Chapter 2: Relational Algebra",
        question: "Which operation is used to combine two relations r and s into a single relation containing all tuples that are in r, in s, or in both?",
        options: {
            A: "Intersection (r ∩ s)",
            B: "Set Difference (r − s)",
            C: "Union (r ∪ s)",
            D: "Selection (σ)"
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 63,
        category: "Chapter 2: Relational Algebra",
        question: "For a Union operation (r ∪ s) to be valid, which condition must be met?",
        options: {
            A: "r and s must have different numbers of attributes.",
            B: "r and s must have the same number of attributes and compatible domains.",
            C: "r must be a subset of s.",
            D: "The names of the attributes must be identical."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 64,
        category: "Chapter 2: Relational Algebra",
        question: "The Set Difference operation (r − s) returns:",
        options: {
            A: "Tuples that are in both r and s.",
            B: "Tuples that are in s but not in r.",
            C: "Tuples that are in r but not in s.",
            D: "All tuples from both relations."
        },
        answer: "C",
        source: "Slide 14"
    },
    {
        id: 65,
        category: "Chapter 2: Relational Algebra",
        question: "Which symbol represents the Cartesian Product operation?",
        options: {
            A: "×",
            B: "÷",
            C: "∪",
            D: "⋈"
        },
        answer: "A",
        source: "Slide 15"
    },
    {
        id: 66,
        category: "Chapter 2: Relational Algebra",
        question: "If relation r has 2 rows and relation s has 3 rows, how many rows will the Cartesian product r × s have?",
        options: {
            A: "5",
            B: "6",
            C: "2",
            D: "3"
        },
        answer: "B",
        source: "Slide 16"
    },
    {
        id: 67,
        category: "Chapter 2: Relational Algebra",
        question: "The Rename operation is denoted by the Greek letter:",
        options: {
            A: "Sigma (σ)",
            B: "Pi (Π)",
            C: "Rho (ρ)",
            D: "Beta (β)"
        },
        answer: "C",
        source: "Slide 17"
    },
    {
        id: 68,
        category: "Chapter 2: Relational Algebra",
        question: "What is the syntax for renaming a relation r to x?",
        options: {
            A: "σ_x(r)",
            B: "Π_x(r)",
            C: "ρ_x(r)",
            D: "r → x"
        },
        answer: "C",
        source: "Slide 18"
    },
    {
        id: 69,
        category: "Chapter 2: Relational Algebra",
        question: "Which of the following is a Binary Operation (takes two relations as input)?",
        options: {
            A: "Select",
            B: "Project",
            C: "Rename",
            D: "Union"
        },
        answer: "D",
        source: "Slide 19"
    },
    {
        id: 70,
        category: "Chapter 2: Relational Algebra",
        question: "The ability to use the result of one relational operation as the input for another is called:",
        options: {
            A: "Normalization",
            B: "Composition",
            C: "Decomposition",
            D: "Aggregation"
        },
        answer: "B",
        source: "Slide 20"
    },
    // Chapter 3: Normalization & Functional Dependencies
    {
        id: 71,
        category: "Chapter 3: Normalization & FD",
        question: "What is the primary process for deciding which attributes should be grouped together in a relation to remove anomalies?",
        options: {
            A: "Indexing",
            B: "Normalization",
            C: "Aggregation",
            D: "Denormalization"
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 72,
        category: "Chapter 3: Normalization & FD",
        question: "Which of the following is NOT a purpose of normalization stated in the slides?",
        options: {
            A: "To minimize data redundancy.",
            B: "To simplify the enforcement of referential integrity constraints.",
            C: "To maximize the storage space used by the database.",
            D: "To make it easier to maintain data (insert, update, delete)."
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 73,
        category: "Chapter 3: Normalization & FD",
        question: "What is \"Data Redundancy\"?",
        options: {
            A: "The process of deleting data.",
            B: "The duplication of the same data in the table.",
            C: "The unique identification of rows.",
            D: "The connection between two tables."
        },
        answer: "B",
        source: "Slide 5"
    },
    {
        id: 74,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of anomaly occurs when adding new rows forces the user to create duplicate data?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Selection Anomaly"
        },
        answer: "A",
        source: "Slide 6"
    },
    {
        id: 75,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of anomaly occurs when deleting rows causes a loss of data that would be needed for other future rows?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Projection Anomaly"
        },
        answer: "B",
        source: "Slide 6"
    },
    {
        id: 76,
        category: "Chapter 3: Normalization & FD",
        question: "If changing data in one row forces changes to other rows because of duplication, this is called a(n):",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification Anomaly",
            D: "Integrity Anomaly"
        },
        answer: "C",
        source: "Slide 6"
    },
    {
        id: 77,
        category: "Chapter 3: Normalization & FD",
        question: "A Functional Dependency A → B means:",
        options: {
            A: "Attribute B determines the value of attribute A.",
            B: "For each value of A, there is only one corresponding value of B.",
            C: "A and B are unrelated.",
            D: "A is the dependent attribute and B is the determinant."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 78,
        category: "Chapter 3: Normalization & FD",
        question: "In the functional dependency A → B, the attribute A (left-hand side) is called the:",
        options: {
            A: "Dependent",
            B: "Determinant",
            C: "Relation",
            D: "Key"
        },
        answer: "B",
        source: "Slide 15"
    },
    {
        id: 79,
        category: "Chapter 3: Normalization & FD",
        question: "Which type of dependency occurs when the determinant is only part of the primary key (i.e., a proper subset of the key determines a non-prime attribute)?",
        options: {
            A: "Full Functional Dependency",
            B: "Partial Functional Dependency",
            C: "Transitive Functional Dependency",
            D: "Trivial Dependency"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 80,
        category: "Chapter 3: Normalization & FD",
        question: "If X → Y, Y → Z, and X is the primary key, then X → Z is considered a __________ dependency.",
        options: {
            A: "Partial",
            B: "Full",
            C: "Transitive",
            D: "Reflexive"
        },
        answer: "C",
        source: "Slide 17"
    },
    {
        id: 81,
        category: "Chapter 3: Normalization & FD",
        question: "Which of Armstrong's Axioms states: \"If Y is a subset of X (X ⊇ Y), then X → Y\"?",
        options: {
            A: "Reflexivity",
            B: "Augmentation",
            C: "Transitivity",
            D: "Union"
        },
        answer: "A",
        source: "Slide 21"
    },
    {
        id: 82,
        category: "Chapter 3: Normalization & FD",
        question: "Which of Armstrong's Axioms states: \"If X → Y, then XZ → YZ\"?",
        options: {
            A: "Reflexivity",
            B: "Augmentation",
            C: "Transitivity",
            D: "Decomposition"
        },
        answer: "B",
        source: "Slide 21"
    },
    {
        id: 83,
        category: "Chapter 3: Normalization & FD",
        question: "The Union rule derived from Armstrong's Axioms states: \"If X → Y and X → Z, then __________\"",
        options: {
            A: "X → Y",
            B: "X → Z",
            C: "X → YZ",
            D: "Y → Z"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 84,
        category: "Chapter 3: Normalization & FD",
        question: "What is the \"Closure\" of a set of attributes X (denoted as X⁺)?",
        options: {
            A: "The set of all attributes in the relation.",
            B: "The set of all primary keys.",
            C: "The set of all attributes that are functionally determined by X.",
            D: "The number of dependencies in the relation."
        },
        answer: "C",
        source: "Slide 24"
    },
    {
        id: 85,
        category: "Chapter 3: Normalization & FD",
        question: "A set of attributes that uniquely determines all the attributes of a relation is known as a:",
        options: {
            A: "Foreign Key",
            B: "Partial Key",
            C: "Super Key",
            D: "Dependent Key"
        },
        answer: "C",
        source: "Slide 31"
    },
    {
        id: 86,
        category: "Chapter 3: Normalization & FD",
        question: "What distinguishes a Candidate Key from a Super Key?",
        options: {
            A: "A Candidate Key must be a single attribute.",
            B: "A Candidate Key is a minimal Super Key (no proper subset is a Super Key).",
            C: "A Candidate Key allows null values.",
            D: "There is no difference."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 87,
        category: "Chapter 3: Normalization & FD",
        question: "When finding candidate keys, if an attribute never appears on the right-hand side of any functional dependency, it:",
        options: {
            A: "Must be part of every candidate key.",
            B: "Cannot be part of any candidate key.",
            C: "Is a derived attribute.",
            D: "Is a redundant attribute."
        },
        answer: "A",
        source: "Slide 35"
    },
    {
        id: 88,
        category: "Chapter 3: Normalization & FD",
        question: "Which axiom is described by: \"If X → YZ, then X → Y and X → Z\"?",
        options: {
            A: "Union",
            B: "Decomposition",
            C: "Pseudo transitivity",
            D: "Extension"
        },
        answer: "B",
        source: "Slide 22"
    },
    {
        id: 89,
        category: "Chapter 3: Normalization & FD",
        question: "A → B is a Full Functional Dependency if:",
        options: {
            A: "B depends on a subset of A.",
            B: "B is fully functionally dependent on A, but not on any proper subset of A.",
            C: "A depends on B.",
            D: "A and B are the same attribute."
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 90,
        category: "Chapter 3: Normalization & FD",
        question: "Ideally, a well-structured relation allows users to insert, delete, and update rows without causing:",
        options: {
            A: "Data Redundancy",
            B: "Normalization",
            C: "Functional Dependencies",
            D: "Primary Keys"
        },
        answer: "A",
        source: "Slide 5"
    },
    // Chapter 3: Normal Forms (1NF, 2NF, 3NF, BCNF)
    {
        id: 91,
        category: "Chapter 3: Normal Forms",
        question: "What is the fundamental requirement for a relation to be in First Normal Form (1NF)?",
        options: {
            A: "It must have a composite primary key.",
            B: "It must not have any transitive dependencies.",
            C: "It must not have any multivalued attributes or repeating groups (values must be atomic).",
            D: "It must be in 2NF."
        },
        answer: "C",
        source: "Slide 5"
    },
    {
        id: 92,
        category: "Chapter 3: Normal Forms",
        question: "If a table contains a cell with multiple phone numbers for a single student (e.g., \"0905123, 0905456\"), which normal form does it violate?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "BCNF"
        },
        answer: "A",
        source: "Slide 5, 6"
    },
    {
        id: 93,
        category: "Chapter 3: Normal Forms",
        question: "From a structural point of view, which statement is true regarding the hierarchy of normal forms?",
        options: {
            A: "1NF is better than 2NF.",
            B: "2NF is better than 3NF.",
            C: "3NF is better than 2NF.",
            D: "Unnormalized data is better than 1NF."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 94,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in Second Normal Form (2NF) if it is in 1NF and:",
        options: {
            A: "It has no transitive dependencies.",
            B: "It has no partial dependencies.",
            C: "It has no multivalued attributes.",
            D: "It has a single-attribute primary key."
        },
        answer: "B",
        source: "Slide 11"
    },
    {
        id: 95,
        category: "Chapter 3: Normal Forms",
        question: "A Partial Functional Dependency exists when:",
        options: {
            A: "A non-key attribute is dependent on another non-key attribute.",
            B: "A non-key attribute is dependent on the whole primary key.",
            C: "A non-key attribute is dependent on part (but not all) of a composite primary key.",
            D: "A key attribute depends on a non-key attribute."
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 96,
        category: "Chapter 3: Normal Forms",
        question: "If a relation has a Primary Key consisting of a single attribute, which Normal Form condition is automatically met (provided it is already in 1NF)?",
        options: {
            A: "2NF",
            B: "3NF",
            C: "BCNF",
            D: "4NF"
        },
        answer: "A",
        source: "Slide 11"
    },
    {
        id: 97,
        category: "Chapter 3: Normal Forms",
        question: "In the functional dependency diagram for a table with Primary Key (OrderID, ProductID), if ProductName depends only on ProductID, this is an example of:",
        options: {
            A: "Full functional dependency.",
            B: "Transitive dependency.",
            C: "Partial dependency.",
            D: "Trivial dependency."
        },
        answer: "C",
        source: "Slide 12"
    },
    {
        id: 98,
        category: "Chapter 3: Normal Forms",
        question: "To convert a relation from 1NF to 2NF, you must:",
        options: {
            A: "Remove transitive dependencies by creating new tables.",
            B: "Remove partial dependencies by decomposing the relation into new relations where non-key attributes depend on the full key.",
            C: "Remove repeating groups.",
            D: "Define a primary key."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 99,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in Third Normal Form (3NF) if it is in 2NF and:",
        options: {
            A: "It has no repeating groups.",
            B: "It has no partial dependencies.",
            C: "It has no transitive dependencies.",
            D: "It has no determinants."
        },
        answer: "C",
        source: "Slide 15"
    },
    {
        id: 100,
        category: "Chapter 3: Normal Forms",
        question: "A Transitive Dependency exists when:",
        options: {
            A: "A → B and B → C, so A → C (where A is the Primary Key).",
            B: "Part of the key determines a non-key attribute.",
            C: "A non-key attribute determines part of the primary key.",
            D: "The primary key determines all attributes."
        },
        answer: "A",
        source: "Slide 15"
    },
    {
        id: 101,
        category: "Chapter 3: Normal Forms",
        question: "If a table contains attributes Student_ID (Key), Major, and Dept_Head, and Major determines Dept_Head, which normal form is violated?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "None"
        },
        answer: "C",
        source: "Slide 16"
    },
    {
        id: 102,
        category: "Chapter 3: Normal Forms",
        question: "What is the typical goal for business database design regarding normalization?",
        options: {
            A: "1NF is sufficient.",
            B: "2NF is sufficient.",
            C: "3NF is usually sufficient.",
            D: "BCNF is always required."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 103,
        category: "Chapter 3: Normal Forms",
        question: "In the normalization process, which step comes immediately after removing partial dependencies?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "4NF"
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 104,
        category: "Chapter 3: Normal Forms",
        question: "Boyce-Codd Normal Form (BCNF) is a special case of which normal form?",
        options: {
            A: "1NF",
            B: "2NF",
            C: "3NF",
            D: "4NF"
        },
        answer: "C",
        source: "Slide 20"
    },
    {
        id: 105,
        category: "Chapter 3: Normal Forms",
        question: "A relation is in BCNF if and only if:",
        options: {
            A: "Every determinant is a candidate key.",
            B: "Every candidate key is a determinant.",
            C: "It is in 2NF.",
            D: "It has no composite keys."
        },
        answer: "A",
        source: "Slide 20"
    },
    {
        id: 106,
        category: "Chapter 3: Normal Forms",
        question: "BCNF handles anomalies that are not handled by 3NF. These anomalies usually occur when:",
        options: {
            A: "A table has a single candidate key.",
            B: "A table has multiple overlapping candidate keys.",
            C: "A table has no primary key.",
            D: "A table has only one attribute."
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 107,
        category: "Chapter 3: Normal Forms",
        question: "If a relation is in BCNF, it is also automatically in:",
        options: {
            A: "4NF",
            B: "3NF",
            C: "5NF",
            D: "Reverse 1NF"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 108,
        category: "Chapter 3: Normal Forms",
        question: "Consider the dependency: A → B. If A is NOT a candidate key, but the relation is in 3NF, this suggests:",
        options: {
            A: "B must be a prime attribute (part of a candidate key).",
            B: "The relation is already in BCNF.",
            C: "It is a partial dependency.",
            D: "It is a multivalued dependency."
        },
        answer: "A",
        source: "BCNF vs 3NF context"
    },
    {
        id: 109,
        category: "Chapter 3: Normal Forms",
        question: "Why might the highest level of normalization (e.g., BCNF or 4NF) not always be desirable?",
        options: {
            A: "It takes too much storage space.",
            B: "It simplifies the database design too much.",
            C: "It creates too many tables, potentially requiring complex joins that affect performance.",
            D: "It increases data redundancy."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 110,
        category: "Chapter 3: Normal Forms",
        question: "Which of the following is NOT a valid anomaly that normalization aims to eliminate?",
        options: {
            A: "Insertion Anomaly",
            B: "Deletion Anomaly",
            C: "Modification (Update) Anomaly",
            D: "Retrieval Anomaly"
        },
        answer: "D",
        source: "Slide 9"
    },
    // Chapter 4: Introduction to SQL & DDL/DML
    {
        id: 111,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What does SQL stand for?",
        options: {
            A: "Structured Question Language",
            B: "Structured Query Language",
            C: "Simple Query Logic",
            D: "Standard Query Language"
        },
        answer: "B",
        source: "Slide 2"
    },
    {
        id: 112,
        category: "Chapter 4: SQL & DDL/DML",
        question: "SQL is primarily classified as which type of language?",
        options: {
            A: "Procedural",
            B: "Object-Oriented",
            C: "Non-procedural (Declarative)",
            D: "Functional"
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 113,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which subset of SQL commands is used to define the database structure (e.g., creating tables)?",
        options: {
            A: "DML (Data Manipulation Language)",
            B: "DDL (Data Definition Language)",
            C: "DCL (Data Control Language)",
            D: "TCL (Transaction Control Language)"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 114,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which of the following is a DML (Data Manipulation Language) command?",
        options: {
            A: "CREATE",
            B: "ALTER",
            C: "INSERT",
            D: "DROP"
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 115,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which command is used to remove a table definition and its data from the database entirely?",
        options: {
            A: "DELETE",
            B: "REMOVE",
            C: "DROP",
            D: "TRUNCATE"
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 116,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which command is used to modify the structure of an existing table (e.g., adding a new column)?",
        options: {
            A: "UPDATE",
            B: "CHANGE",
            C: "ALTER",
            D: "MODIFY"
        },
        answer: "C",
        source: "Slide 9"
    },
    {
        id: 117,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which data type is typically used to store variable-length character strings?",
        options: {
            A: "CHAR",
            B: "VARCHAR",
            C: "INTEGER",
            D: "BOOLEAN"
        },
        answer: "B",
        source: "DDL Data Types"
    },
    {
        id: 118,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which constraint ensures that a column cannot have a NULL value?",
        options: {
            A: "UNIQUE",
            B: "NOT NULL",
            C: "CHECK",
            D: "DEFAULT"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 119,
        category: "Chapter 4: SQL & DDL/DML",
        question: "A Primary Key constraint implicitly includes which other constraint?",
        options: {
            A: "NOT NULL and UNIQUE",
            B: "FOREIGN KEY",
            C: "CHECK",
            D: "DEFAULT"
        },
        answer: "A",
        source: "Slide 17"
    },
    {
        id: 120,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which constraint is used to establish a relationship between two tables (referential integrity)?",
        options: {
            A: "PRIMARY KEY",
            B: "FOREIGN KEY",
            C: "INDEX",
            D: "UNIQUE"
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 121,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What is the correct syntax to add a new record to a table?",
        options: {
            A: "ADD INTO table_name VALUES (...)",
            B: "INSERT INTO table_name VALUES (...)",
            C: "UPDATE table_name SET (...)",
            D: "CREATE ROW IN table_name VALUES (...)"
        },
        answer: "B",
        source: "Slide 3, 23"
    },
    {
        id: 122,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which statement is used to modify existing records in a table?",
        options: {
            A: "ALTER",
            B: "MODIFY",
            C: "UPDATE",
            D: "CHANGE"
        },
        answer: "C",
        source: "Slide 3, 23"
    },
    {
        id: 123,
        category: "Chapter 4: SQL & DDL/DML",
        question: "To prevent deleting all rows in a table when using the DELETE command, what clause should you include?",
        options: {
            A: "WHERE",
            B: "HAVING",
            C: "LIKE",
            D: "FROM"
        },
        answer: "A",
        source: "SQL DELETE safety"
    },
    {
        id: 124,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which DCL command is used to give a user permission to perform specific actions on database objects?",
        options: {
            A: "ALLOW",
            B: "GRANT",
            C: "REVOKE",
            D: "PERMIT"
        },
        answer: "B",
        source: "Slide 8"
    },
    {
        id: 125,
        category: "Chapter 4: SQL & DDL/DML",
        question: "In a CREATE TABLE statement, what does the DEFAULT clause do?",
        options: {
            A: "It prevents duplicate values.",
            B: "It provides a value for a column if none is specified during insertion.",
            C: "It ensures the value falls within a specific range.",
            D: "It automatically increments the value."
        },
        answer: "B",
        source: "Slide 17"
    },
    {
        id: 126,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which of the following is NOT a benefit of standardizing SQL mentioned in the slides?",
        options: {
            A: "Reduced training costs.",
            B: "Application portability.",
            C: "Reduced dependence on a single vendor.",
            D: "Increased complexity of code."
        },
        answer: "D",
        source: "Slide 7"
    },
    {
        id: 127,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What distinguishes DELETE from DROP?",
        options: {
            A: "DELETE removes the table structure; DROP removes rows.",
            B: "DELETE removes rows (data) but keeps the structure; DROP removes the structure and data.",
            C: "They are synonyms.",
            D: "DELETE is DDL; DROP is DML."
        },
        answer: "B",
        source: "DDL vs DML"
    },
    {
        id: 128,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which SQL standard year introduced major relational features first (often cited as the first ANSI standard)?",
        options: {
            A: "1970",
            B: "1979",
            C: "1986",
            D: "2016"
        },
        answer: "C",
        source: "Slide 5"
    },
    {
        id: 129,
        category: "Chapter 4: SQL & DDL/DML",
        question: "Which data type would be best for storing the price of a product (e.g., 19.99)?",
        options: {
            A: "INTEGER",
            B: "DECIMAL / NUMERIC",
            C: "VARCHAR",
            D: "DATE"
        },
        answer: "B",
        source: "SQL Data Types"
    },
    {
        id: 130,
        category: "Chapter 4: SQL & DDL/DML",
        question: "What is the purpose of the CHECK constraint?",
        options: {
            A: "To verify that the data exists in another table.",
            B: "To ensure that all values in a column are unique.",
            C: "To ensure that values in a column satisfy a specific condition.",
            D: "To check if the table exists before creating it."
        },
        answer: "C",
        source: "Slide 17"
    },
    // Chapter 4: SQL DML (SELECT, VIEW)
    {
        id: 131,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL clause is used to identify the table(s) needed to process a query?",
        options: {
            A: "SELECT",
            B: "WHERE",
            C: "FROM",
            D: "ORDER BY"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 132,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What is the purpose of the WHERE clause in a SELECT statement?",
        options: {
            A: "To select specific columns.",
            B: "To sort the results.",
            C: "To restrict the query to rows that meet specific conditions.",
            D: "To group rows based on values."
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 133,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which symbol is used in a SELECT statement to retrieve all columns from a table?",
        options: {
            A: "%",
            B: "*",
            C: "&",
            D: "#"
        },
        answer: "B",
        source: "Slide 6"
    },
    {
        id: 134,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "How are string (character) comparisons made in SQL?",
        options: {
            A: "Right-to-left alphabetic comparison.",
            B: "Based on string length.",
            C: "Left-to-right ASCII character comparison.",
            D: "Case-insensitive comparison by default only."
        },
        answer: "C",
        source: "Slide 8"
    },
    {
        id: 135,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which keyword is used to give an alternate name to a column or table in a SQL statement?",
        options: {
            A: "NAME",
            B: "ALIAS",
            C: "AS",
            D: "RENAME"
        },
        answer: "C",
        source: "Slide 11"
    },
    {
        id: 136,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which operator is used to check whether an attribute value is within a specific range?",
        options: {
            A: "IN",
            B: "LIKE",
            C: "BETWEEN",
            D: "EXISTS"
        },
        answer: "C",
        source: "Slide 14"
    },
    {
        id: 137,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which operator is used to check for character patterns using wildcards?",
        options: {
            A: "MATCH",
            B: "LIKE",
            C: "CONTAINS",
            D: "SEARCH"
        },
        answer: "B",
        source: "Slide 14"
    },
    {
        id: 138,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "In SQL, which logical operator allows you to check if a value matches any value within a list?",
        options: {
            A: "LIST",
            B: "EXISTS",
            C: "IN",
            D: "INCLUDE"
        },
        answer: "C",
        source: "Slide 14, 17"
    },
    {
        id: 139,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What does the special operator IS NULL check for?",
        options: {
            A: "Values that are zero.",
            B: "Values that are empty strings.",
            C: "Values that are missing or undefined (null).",
            D: "Values that are negative."
        },
        answer: "C",
        source: "Slide 14, 16"
    },
    {
        id: 140,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL clause is used to sort the result set?",
        options: {
            A: "SORT BY",
            B: "ORDER BY",
            C: "GROUP BY",
            D: "ARRANGE BY"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 141,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "By default, in which order does ORDER BY sort the records?",
        options: {
            A: "Descending",
            B: "Ascending",
            C: "Random",
            D: "Insertion order"
        },
        answer: "B",
        source: "Slide 20"
    },
    {
        id: 142,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which SQL keyword is used to list only unique values and eliminate duplicate rows?",
        options: {
            A: "UNIQUE",
            B: "DISTINCT",
            C: "DIFFERENT",
            D: "SINGLE"
        },
        answer: "B",
        source: "Slide 21"
    },
    {
        id: 143,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which aggregate function returns the total sum of values in a column?",
        options: {
            A: "COUNT",
            B: "MAX",
            C: "SUM",
            D: "TOTAL"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 144,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "The COUNT aggregate function is used to:",
        options: {
            A: "Calculate the average of values.",
            B: "Find the maximum value.",
            C: "Tally the number of non-null values in an attribute (or rows).",
            D: "Sum all values."
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 145,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which clause is commonly used with aggregate functions to group rows that have the same values?",
        options: {
            A: "ORDER BY",
            B: "GROUP BY",
            C: "WHERE",
            D: "HAVING"
        },
        answer: "B",
        source: "Slide 27"
    },
    {
        id: 146,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "The HAVING clause is specifically designed to:",
        options: {
            A: "Restrict rows before grouping.",
            B: "Restrict the output of a GROUP BY query (apply conditions to groups).",
            C: "Sort the grouped data.",
            D: "Join multiple tables."
        },
        answer: "B",
        source: "Slide 29"
    },
    {
        id: 147,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Can you use an aggregate function (like COUNT or SUM) in a WHERE clause?",
        options: {
            A: "Yes, always.",
            B: "No, aggregate functions must be used in the HAVING clause when filtering groups.",
            C: "Yes, but only with subqueries.",
            D: "No, they can only be used in the ORDER BY clause."
        },
        answer: "B",
        source: "Slide 29"
    },
    {
        id: 148,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "What is a VIEW in SQL?",
        options: {
            A: "A physical table that stores data permanently.",
            B: "A virtual table based on a SELECT query.",
            C: "A backup of a table.",
            D: "A temporary table for calculations."
        },
        answer: "B",
        source: "Slide 31"
    },
    {
        id: 149,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which command is used to create a view?",
        options: {
            A: "MAKE VIEW",
            B: "CREATE VIEW",
            C: "NEW VIEW",
            D: "DEFINE VIEW"
        },
        answer: "B",
        source: "Slide 31"
    },
    {
        id: 150,
        category: "Chapter 4: SQL SELECT & VIEW",
        question: "Which command is used to remove a view from the database?",
        options: {
            A: "DELETE VIEW",
            B: "REMOVE VIEW",
            C: "DROP VIEW",
            D: "ERASE VIEW"
        },
        answer: "C",
        source: "Slide 31"
    },
    // Chapter 4: SQL Subqueries and Joins
    {
        id: 151,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "What is a Subquery in SQL?",
        options: {
            A: "A query that joins two tables.",
            B: "A query inside another query.",
            C: "A query that creates a new table.",
            D: "A query that deletes data."
        },
        answer: "B",
        source: "Slide 3"
    },
    {
        id: 152,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A subquery is most commonly found in which clause of the outer query?",
        options: {
            A: "SELECT",
            B: "FROM",
            C: "WHERE",
            D: "GROUP BY"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 153,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which of the following is NOT allowed in a standard subquery SELECT statement?",
        options: {
            A: "Aggregate functions (SUM, AVG)",
            B: "The keyword DISTINCT",
            C: "An ORDER BY phrase",
            D: "A WHERE clause"
        },
        answer: "C",
        source: "Slide 3"
    },
    {
        id: 154,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Noncorrelated (Self-contained) subquery:",
        options: {
            A: "Depends on values from the outer query.",
            B: "Executes once for each row returned by the outer query.",
            C: "Has no dependency on the outer query and executes once for the entire outer query.",
            D: "Cannot return a list of values."
        },
        answer: "C",
        source: "Slide 4"
    },
    {
        id: 155,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Correlated subquery:",
        options: {
            A: "Executes once for the entire outer query.",
            B: "Depends on values from the outer query and executes once for each row of the outer query.",
            C: "Is strictly forbidden in SQL.",
            D: "Must always return a single value."
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 156,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operator is commonly used with Correlated Subqueries to check for the existence of rows?",
        options: {
            A: "IN",
            B: "EXISTS",
            C: "LIKE",
            D: "BETWEEN"
        },
        answer: "B",
        source: "Slide 4"
    },
    {
        id: 157,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Scalar Subquery returns:",
        options: {
            A: "A list of values (one column, multiple rows).",
            B: "A virtual table (multiple columns, multiple rows).",
            C: "A single value (one column, one row).",
            D: "No value."
        },
        answer: "C",
        source: "Slide 5, 10"
    },
    {
        id: 158,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operators are used with Scalar Subqueries?",
        options: {
            A: "IN, ANY, ALL",
            B: "Comparison operators (=, >, <, >=, <=, <>)",
            C: "UNION, INTERSECT",
            D: "LIKE, IS NULL"
        },
        answer: "B",
        source: "Slide 10"
    },
    {
        id: 159,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "If a Scalar Subquery returns multiple values, what happens?",
        options: {
            A: "It selects the first value.",
            B: "It selects the maximum value.",
            C: "The DBMS generates an error.",
            D: "It automatically converts to a list."
        },
        answer: "C",
        source: "Slide 10"
    },
    {
        id: 160,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which operator is used with Multi-Valued Subqueries to check if a value matches any member in a list?",
        options: {
            A: "=",
            B: "IN",
            C: "LIKE",
            D: "IS"
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 161,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "The ALL operator in a subquery means:",
        options: {
            A: "Equal to any member in the list.",
            B: "The condition must be true for all values returned by the subquery.",
            C: "The condition must be true for at least one value.",
            D: "All rows from the table are returned."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 162,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "What does the ANY operator do?",
        options: {
            A: "Returns rows that match all values in the list.",
            B: "Returns rows that match any value in the list returned by the subquery.",
            C: "Returns a random row.",
            D: "It is a synonym for IN."
        },
        answer: "B",
        source: "Slide 13"
    },
    {
        id: 163,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which type of Join returns rows when there is a match in both tables?",
        options: {
            A: "Left Outer Join",
            B: "Right Outer Join",
            C: "Inner Join",
            D: "Full Outer Join"
        },
        answer: "C",
        source: "Slide 22"
    },
    {
        id: 164,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which type of Join returns all rows from the left table, and the matched rows from the right table?",
        options: {
            A: "Inner Join",
            B: "Left Outer Join",
            C: "Right Outer Join",
            D: "Cross Join"
        },
        answer: "B",
        source: "Slide 25"
    },
    {
        id: 165,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "If there is no match in a Left Outer Join, the result from the right side will contain:",
        options: {
            A: "The previous row's value.",
            B: "Zeros.",
            C: "NULL.",
            D: "An error message."
        },
        answer: "C",
        source: "Slide 25"
    },
    {
        id: 166,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "A Self Join is:",
        options: {
            A: "A join between two different tables with the same name.",
            B: "A join in which a table is joined with itself.",
            C: "A join that combines all columns from two tables.",
            D: "Impossible in SQL."
        },
        answer: "B",
        source: "Slide 28"
    },
    {
        id: 167,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which join produces a Cartesian product (every row of one table combined with every row of the other)?",
        options: {
            A: "Natural Join",
            B: "Equi-Join",
            C: "Cross Join",
            D: "Outer Join"
        },
        answer: "C",
        source: "Slide 29"
    },
    {
        id: 168,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "The UNION set operator:",
        options: {
            A: "Returns common rows between two queries.",
            B: "Returns all rows from both queries and removes duplicates.",
            C: "Returns all rows including duplicates.",
            D: "Returns rows from the first query that are not in the second."
        },
        answer: "B",
        source: "Slide 32"
    },
    {
        id: 169,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which set operator returns only the rows that appear in both result sets (common rows)?",
        options: {
            A: "UNION",
            B: "UNION ALL",
            C: "INTERSECT",
            D: "EXCEPT (or MINUS)"
        },
        answer: "C",
        source: "Slide 32"
    },
    {
        id: 170,
        category: "Chapter 4: SQL Subqueries & Joins",
        question: "Which set operator returns rows from the first query that are not present in the second query?",
        options: {
            A: "UNION",
            B: "INTERSECT",
            C: "EXCEPT (or MINUS)",
            D: "CROSS JOIN"
        },
        answer: "C",
        source: "Slide 32"
    }
];

// Get all unique categories
function getMCQCategories() {
    const categories = [...new Set(mcqData.map(q => q.category))];
    return categories;
}

// Get questions by category
function getQuestionsByCategory(category) {
    if (category === "All") {
        return mcqData;
    }
    return mcqData.filter(q => q.category === category);
}
