export default {
    windowHeight: null,
    headerHeight: null,
    chatHeaderHeight: null,
    chatBottomHeight: null,
    inputValue: '',
    profile: {
        id: '111111',
        name: 'Александр',
        photo: 'http://www.netlore.ru/upload/files/68338/p19d7nh1hm1i37tnuim11ebqo5c1.jpg',
    },
    chat: {
        user: {
            id: '123456',
            name: 'Светлана',
            photo: 'https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B0%D1%82%D1%8C-%D0%B8-%D0%B8-%D0%BD%D1%8F%D0%BD%D1%8F-%D1%81-%D0%B5%D1%82%D1%8C%D0%BC%D0%B8-%D1%8D%D0%BC%D0%B1-%D0%B5%D0%BC%D0%B0-74864714.jpg',
            status: 'online',
        },
        messages: [
            {
                id: '1',
                type: 'date',
                date: '07-05-2018',
                time: '14:45',
            },
            {
                id: '2',
                type: 'recipient',
                text: 'Скажите свой номер телефона',
                date: '07-05-2018',
                time: '14:40',
                author_id: '123456',
                status: 'archived'
            },
            {
                id: '3',
                type: 'sender',
                text: 'Отправьте запрос, пожалуйста :)',
                date: '07-05-2018',
                time: '14:43',
                author_id: '111111',
                status: 'archived'
            },
            {
                id: '4',
                type: 'sender',
                text: 'Вот мой номер 8 968 785 25 11 на всякий случай, Салли',
                date: '07-05-2018',
                time: '14:43',
                author_id: '111111',
                status: 'archived'
            },
            {
                id: '5',
                type: 'bot',
                text: 'Принял(а) заказ на 22 сентября 17:00-23:00',
                date: '07-05-2018',
                time: '14:44',
                status: 'sended'
            },
            {
                id: '6',
                type: 'date',
                date: '07-09-2018',
                time: '16:45',
            },
            
            {
                id: '7',
                type: 'sender',
                text: 'Спасибо!',
                date: '07-09-2018',
                time: '12:20',
                author_id: '111111',
                status: 'archived'
            },
            {
                id: '8',
                type: 'recipient',
                text: 'и мой: + 7 916 553 4621',
                date: '07-09-2018',
                time: '12:20',
                author_id: '123456',
                status: 'archived'

            },
            {
                id: '9',
                type: 'recipient',
                text: 'Салли, сорри, театр отменился. Но с удовольствием позовем вас в четверг в это же время. Вы сможете?',
                date: '07-09-2018',
                time: '12:20',
                author_id: '123456',
                status: 'archived'
            },
            {
                id: '10',
                type: 'recipient',
                text: 'Жаль :(',
                date: '07-09-2018',
                time: '12:20',
                author_id: '123456',
                status: 'archived'
            },
            {
                id: '11',
                type: 'sender',
                text: 'Нет, к сожалению, не могу в четверг',
                date: '07-09-2018',
                time: '12:22',
                author_id: '111111',
                status: 'archived'
            },
            {
                id: '12',
                type: 'sender',
                text: 'Нет, к сожалению, не могу в четверг',
                date: '07-09-2018',
                time: '12:23',
                author_id: '111111',
                // status: 'sending'
                status: 'archived'
            },
            {
                id: '13',
                type: 'sender',
                text: 'Нет, к сожалению, не могу в четверг',
                date: '07-09-2018',
                time: '12:24',
                author_id: '111111',
                status: 'failed'
                // status: 'archived'
            },
            {
                id: '14',
                type: 'bot',
                text: 'Произошла ошибка, попробуйте отправить заказ еще раз',
                date: '07-09-2018',
                time: '12:25',
                status: 'failed'
            },
        ]
    }    
}   
