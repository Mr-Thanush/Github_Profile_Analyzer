CREATE DATABASE github_analyzer;
USE github_analyzer;
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT UNIQUE,
    username VARCHAR(255),
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    public_gists INT,
    account_age_days INT,
    profile_url VARCHAR(500),
    avatar_url VARCHAR(500),
    created_at DATETIME,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);