const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Нина",
            "id_7": "Ольга",
            "id_8": "Елена",
            "id_9": "Елизавета",
            "id_10": "Екатерина"
        }
    }`,
    parentNameJson: `{  
        "count": 10,
        "list": {
            "id_1": "Иванович",
            "id_2": "Семёнович",
            "id_3": "Степанович",
            "id_4": "Васильевич",
            "id_5": "Петрович",
            "id_6": "Михайлович",
            "id_7": "Павлович",
            "id_8": "Федорович",
            "id_9": "Александрович",
            "id_10": "Николаевич"
        }
    }`,
    profMaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "веб-разработчик",
            "id_2": "системный администратор",
            "id_3": "аналитик данных",
            "id_4": "маляр",
            "id_5": "кинолог",
            "id_6": "инженер",
            "id_7": "парикмахер",
            "id_8": "переводчик",
            "id_9": "медбрат",
            "id_10": "режиссер"
        }
    }`,
    profFemaleJson: `{  
        "count": 10,
        "list": {
            "id_1": "разработчик",
            "id_2": "хирург",
            "id_3": "Директор",
            "id_4": "маляр",
            "id_5": "воспитатель",
            "id_6": "Военый",
            "id_7": "парикмахер",
            "id_8": "визажист",
            "id_9": "Повар",
            "id_10": "Лесоруб"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        return this.person.gender === this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },
     randomSurname: function() {
        return (this.randomValue(this.surnameJson) + (this.person.gender === this.GENDER_MALE ? `` : `а`));
    },
    randomGender: function() {
        return (this.randomIntNumber(1, 0) === 1 ? this.GENDER_MALE : this.GENDER_FEMALE);
    },
    randomParentName: function() {
        let curParentName = this.randomValue(this.parentNameJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            let curLength = curParentName.length;
            curParentName = curParentName.substring(0, curLength - 2) + "на";
        }
        return curParentName;
    },

    randomProfession: function() {
        return this.person.gender === this.GENDER_MALE ? this.randomValue(this.profMaleJson) : this.randomValue(this.profFemaleJson);
    },
    randomBirthDate: function() {
        let curDate = new Date(1975, 1, 28);
        let birthYear = this.randomIntNumber(curDate.getFullYear(), curDate.getFullYear() + 25);
        let textDate = ` ` + birthYear.toString() + ` года рождения`;
        let birthMonth = this.randomIntNumber(12, 1);
        let numDays = 0;
        switch (birthMonth) {
            case 1:
                textDate = ` января` + textDate;
                numDays = 31;
                break;
            case 2:
                textDate = ` февраля` + textDate;
                numDays = birthYear % 4 === 0 ? 29 : 28;
                break;
            case 3:
                textDate = ` марта` + textDate;
                numDays = 31;
                break;
            case 4:
                textDate = ` апреля` + textDate;
                numDays = 30;
                break;
            case 5:
                textDate = ` мая` + textDate;
                numDays = 31;
                break;
            case 6:
                textDate = ` июня` + textDate;
                numDays = 30;
                break;
            case 7:
                textDate = ` июля` + textDate;
                numDays = 31;
                break;
            case 8:
                textDate = ` августа` + textDate;
                numDays = 31;
                break;
            case 9:
                textDate = ` сентября` + textDate;
                numDays = 30;
                break;
            case 10:
                textDate = ` октября` + textDate;
                numDays = 31;
                break;
            case 11:
                textDate = ` ноября` + textDate;
                numDays = 30;
                break;
            case 12:
                textDate = ` декабря` + textDate;
                numDays = 31;
                break;
        }
        textDate = this.randomIntNumber(numDays, 1).toString() + textDate;
        return textDate;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.parentName = this.randomParentName();
        this.person.profession = this.randomProfession();
        this.person.birthDate = this.randomBirthDate();
        return this.person;
    }
};
