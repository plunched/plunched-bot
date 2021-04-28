Create DATABASE plunched_bot;

CREATE TABLE guilds(
    guildID BIGINT PRIMARY KEY,
    guildName VARCHAR(255) NOT NULL,
    prefixes VARCHAR(5) ARRAY[5] NOT NULL,
    totalCommands INT NOT NULL
);

create TABLE disabledModules(
    guildID BIGINT PRIMARY KEY,
    disable_Trivia_Module BOOLEAN,
    disable_antiswearing BOOLEAN,
    disable_currency_Module BOOLEAN,
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE channels(
    guildID BIGINT PRIMARY KEY,
    logChannel BIGINT,
    welcomeChannel BIGINT,
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE roles(
    guildID BIGINT PRIMARY KEY,
    mutedROLE BIGINT,
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE messages(
    guildID BIGINT PRIMARY KEY,
    welcomeMessage VARCHAR(255),
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE warnings(
    caseID SERIAL,
    guildID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    warnType VARCHAR(100),
    reason VARCHAR(255),
    PRIMARY KEY (caseID, guildID, userID),
    FOREIGN KEY (guildID)
        REFERENCES guilds (guildID)
);

CREATE TABLE itemlist(
    itemID SERIAL PRIMARY KEY,
    itemName VARCHAR(255) NOT NULL,
    itemPrice BIGINT NOT NULL,
    itemDescription VARCHAR(255)
);

CREATE TABLE users(
    userID BIGINT PRIMARY KEY,
    PremiumAcc BOOLEAN DEFAULT false NOT NULL,
    job VARCHAR(100) NOT NULL,
    cash BIGINT NOT NULL DEFAULT 0,
    bank BIGINT NOT NULL DEFAULT 0,
    lastWorkCommand DATE
);

CREATE TABLE inventory(
    userID BIGINT,
    itemID SERIAL,
    itemCount BIGINT,
    PRIMARY KEY (userID, itemID),
    FOREIGN KEY (userID)
        REFERENCES users (userID),
    FOREIGN KEY (itemID)
        REFERENCES itemlist (itemID)
);


DROP TABLE disabledModules;
DROP TABLE inventory;
DROP TABLE channels;
DROP TABLE messages;
DROP TABLE warnings;
DROP TABLE roles;
DROP TABLE users;
DROP TABLE itemlist;
DROP TABLE guilds;
