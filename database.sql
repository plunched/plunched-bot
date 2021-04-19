Create DATABASE plunched_bot;

CREATE TABLE guilds(
    guildID BIGINT PRIMARY KEY,
    guildName VARCHAR(255) NOT NULL,
    prefixes VARCHAR(5) ARRAY[5] NOT NULL,
    mutedRole VARCHAR(21),
    logChannel VARCHAR(21)
);

create TABLE disabledModules(
    guildID SERIAL PRIMARY KEY,
    disable_Trivia_Module BOOLEAN,
    disable_antiswearing BOOLEAN,
    disable_currency_Module BOOLEAN,
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE warnings(
    caseID SERIAL,
    guildID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    warnType VARCHAR,
    reason VARCHAR(255),
    PRIMARY KEY (caseID, guildID, userID),
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE users(
    userID BIGINT PRIMARY KEY,
    cash BIGINT NOT NULL,
    bank BIGINT NOT NULL,
    lastWorkCommand DATE
);

CREATE TABLE inventory(
    userID BIGINT PRIMARY KEY
);