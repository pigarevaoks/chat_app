export default {
    profile: {
        id: '111111',
        name: 'Александр',
        photo: 'http://www.netlore.ru/upload/files/68338/p19d7nh1hm1i37tnuim11ebqo5c1.jpg',
    },
    inputValue: '',
    chat: {
        user: {
            id: '123456',
            name: 'Светлана',
            photo: 'https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B0%D1%82%D1%8C-%D0%B8-%D0%B8-%D0%BD%D1%8F%D0%BD%D1%8F-%D1%81-%D0%B5%D1%82%D1%8C%D0%BC%D0%B8-%D1%8D%D0%BC%D0%B1-%D0%B5%D0%BC%D0%B0-74864714.jpg',
            status: 'online',
        },
        messages: {
            '07-05-2018': [
                {
                    type: 'person',
                    text: 'Скажите свой номер телефона',
                    time: '14:40',
                    autor_id: '123456',
                    status: 'sended'
                },
                {
                    type: 'person',
                    text: 'Отправьте запрос, пожалуйста :)',
                    time: '14:43',
                    autor_id: '111111',
                    status: 'read'
                },
                {
                    type: 'person',
                    text: 'Вот мой номер 8 968 785 25 11 на всякий случай, Салли',
                    time: '14:43',
                    autor_id: '111111',
                    status: 'read'
                },
                {
                    type: 'bot',
                    text: 'Принял(а) заказ на 22 сентября 17:00-23:00',
                    time: '14:44',
                    status: 'sended'
                },
            ],
            
            '07-09-2018': [
                {
                    type: 'person',
                    text: 'Спасибо!',
                    time: '12:13',
                    autor_id: '111111',
                    status: 'sended'
                },
                {
                    type: 'person',
                    text: 'и мой: + 7 916 553 4621',
                    time: '12:20',
                    autor_id: '123456',
                    status: 'sended'
                },
                {
                    type: 'person',
                    text: 'Салли, сорри, театр отменился. Но с удовольствием позовем вас в четверг в это же время. Вы сможете?',
                    time: '12:20',
                    autor_id: '123456',
                    status: 'sended'
                },
                {
                    type: 'person',
                    text: 'Жаль :(',
                    time: '12:20',
                    autor_id: '123456',
                    status: 'sended'
                },
                {
                    type: 'person',
                    text: 'Нет, к сожалению, не могу в четверг',
                    time: '12:23',
                    autor_id: '111111',
                    status: 'read'
                },
                {
                    type: 'person',
                    text: 'Нет, к сожалению, не могу в четверг',
                    time: '12:23',
                    autor_id: '111111',
                    status: 'sending'
                },
                {
                    type: 'person',
                    text: 'Нет, к сожалению, не могу в четверг',
                    time: '12:23',
                    autor_id: '111111',
                    status: 'failed'
                },
                {
                    type: 'bot',
                    text: 'Произошла ошибка, попробуйте отправить заказ еще раз',
                    time: '12:23',
                    status: 'failed'
                },
            ]
        } 
    }    
}   
