CREATE TABLE Users (
    userID int,
    lastName varchar(255),
    firstName varchar(255),
    sex varchar(255),
    age int,
   	email varchar(255),
    password varchar(255),
    address varchar(255),
    phoneNumber varchar(255),
    city varchar(255),
    position varchar(255)
);


INSERT INTO Users (userID, lastName, firstName, sex, age, email, password, address, phoneNumber, city, position)
VALUES ('1', 'Tien', 'Nguyen', 'Male', 22, 'ngngtien.work@gmail.com', 'NNT1t72k', 'B4-Thanh Xuan Bac-Ha Noi', '0965495778', 'Nam Dinh', 'admin');


INSERT INTO Users (userID, lastName, firstName, sex, age, email, `password`, address, phoneNumber, city, position)VALUES ( 2, "Nguyen", "Tien", "male", 25, 'admin@gmail.com', '1234', 'jhsdgfdjhgas', 'hsdjfhkjsdhf', 'jksdghfjhsg', 'jksdhbfjhsdg' )


{
    "newUser":{
        "userID":"3",
        "lastName": "Nguyen",
        "firstName": "Tien",
        "sex": "male",
        "age": 25,
        "email": "admin@gmail.com",
        "password": "1234",
        "address": "jhsdgfdjhgas",
        "phoneNumber": "hsdjfhkjsdhf",
        "city": "jksdghfjhsg",
        "position": "jksdhbfjhsdg"
    } 
}

******************************************************************************************************

CREATE TABLE Users (
    IDCard int NOT NULL,
    FullName varchar(255),
    Gender varchar(255),
    DateOfBirth varchar(255),
   	StudentCode varchar(255),
    Password varchar(255),
    University varchar(255),
    Department varchar(255),
    PhoneNumber varchar(255),
    Email varchar(255),
    Address varchar(255),
    Position varchar(255),
    PRIMARY KEY (IDCard)
);

INSERT INTO Users (IDCard, FullName, Gender, DateOfBirth, StudentCode, `Password`, University, Department, PhoneNumber, Email, Address, Position)VALUES ( 1, "Nguyen Ngoc Tien", "Male", "01-07-2000", "B18DCDT210", 'testpass', 'PTIT', 'Electronic', '0965495778', 'freedom172000@gmail.com', '110 - Tran Thai Tong - Nam Dinh', 'Admin' )

CREATE TABLE History (
    IDCard varchar(255),
    TimeCheckIn DateTime
)

INSERT INTO history (IDCard, TimeCheckIn) VALUES (1, now())