import { useState } from 'react';
import './index.scss';
import Variant from '../Variant';

const questions = [
  {
    title: 'Кто на меня производит впечатление?',
    variants: [{title: '1 - Пригожин',img: '1.jpg'},{title: '2 - Путин',img: 'https://gordost-naroda.ru/wp-content/uploads/2022/11/63bf5c3285b0cc8f95918e217ac570de.jpg'},{
      title: '3 - Моргештерн',img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/49/756091561598497.jpg'
    },{title: '4 - Трамп',img: 'https://www.osnmedia.ru/wp-content/uploads/2022/07/donald-trump.jpg'}],
    correct: 0,
  },
  {
    title: 'Моя любимая песня Вали Карнавал?',
    variants: [{title: '1 - Опять домой',img: 'https://avatars.yandex.net/get-music-content/2442093/7260b7b1.a.11334365-1/200x200'},{title: '2 - Психушка',img: 'https://i.ytimg.com/vi/U1YH75nfSmM/maxresdefault.jpg'},{
      title: '3 - Не сплю ночами',img: 'https://i.ytimg.com/vi/EAaJdB6v0gY/maxresdefault.jpg?7857057827'
    },{title: '4 - Ромашки',img: 'https://i.ytimg.com/vi/GgRiHajD1_c/maxresdefault.jpg'}],
    correct: 2,
  },
  {
    title: 'Моя любимая песня Юли Гаврилинной?',
    variants: [{title: '1 - Замело',img: 'https://i.ytimg.com/vi/-e7M5hLupsA/maxresdefault.jpg?7857057827'},
    {title: '2 - Омут',img: 'https://i.ytimg.com/vi/LlkajJkJCZY/maxresdefault.jpg?7857057827'},{
      title: '3 - Жу Жу',img: 'https://i.ytimg.com/vi/2zB6WZkWxTo/maxresdefault.jpg'
    },{title: '4 - Только ты',img: 'https://avatars.yandex.net/get-music-content/2411511/04e7b035.a.12364618-1/m1000x1000?webp=false'}],
    correct: 0,
  },
  {
    title: 'Какая песня у меня Ассоциироваеться с тобой?',
    variants: [{title: '1 - Лиза',img: 'https://sun9-20.userapi.com/impg/pMA_hnsdNlZFRQO4FTlAk_jK28Qxh9kicmfD_g/Y2xtHZ44wsE.jpg?size=996x996&quality=96&sign=10d8820aa16a281e1412dc438d8fd968&c_uniq_tag=wKGv7y_uOyrGUxYADdhALXU2-irz2WxiEKzAG_hg2pc&type=album'},
    {title: '2 - Не выводи меня',img: 'https://gas-kvas.com/uploads/posts/2023-01/1674148292_gas-kvas-com-p-tri-dnya-dozhdya-gleb-risunok-38.jpg'},{
      title: '3 - Демоны',img: 'https://gas-kvas.com/uploads/posts/2023-01/1674148269_gas-kvas-com-p-tri-dnya-dozhdya-gleb-risunok-17.jpg'
    },{title: '4 - Девочка с каре',img: 'https://arslanmusic.ru/wp-content/uploads/2019/06/m1000x1000.jpg'}],
    correct: 2,
  },
  {
    title: 'Какая у меня любимая машина?',
    variants: [{title: 'Мерседес',img: 'https://i.ytimg.com/vi/NzWQzy4erdA/maxresdefault.jpg'},
    {title: '2 - Феррари',img: 'https://w.forfun.com/fetch/11/11a60c267c5a979b9f27778b11b37746.jpeg'},{
      title: '3 - Ламбо',img: 'https://funart.pro/uploads/posts/2021-04/thumbs/1618367337_15-funart_pro-p-lamborgini-sentenario-mashini-krasivo-foto-15.jpg'
    },],
    correct: 0,
  },
  {
    title: 'Моя любимая песня Егора крида?',
    variants: [{title: '1 - 3-е Сентября',img: 'https://images.thevoicemag.ru/upload/img_cache/1f9/1f9be5d570fa666a438eb7ba6f433f3a_ce_1701x893x246x227_cropped_1200x628.jpg'},
    {title: '2 - Потрачу',img: 'https://i.ytimg.com/vi/NyZ_WC7qW_E/maxresdefault.jpg'},{
      title: '3 - LAMBO URUS',img: 'https://i.ytimg.com/vi/sG1kVpqpJW4/maxresdefault.jpg'
    },{title: '4 - Голос',img: 'https://kakoy-smysl.ru/wp-content/uploads/2021/03/maxresdefault-6.jpg'},
    {title: '5 - Выпускной ❤️‍🩹',img: 'https://avatars.dzeninfra.ru/get-zen_doc/10425803/pub_6488ed8c5ad5f84daaed7024_6488ee42fd06f25efc46f8dd/scale_1200'}],
    correct: 4,
  },
  {
    title: 'Мой любимый фильм?',
    variants: [{title: '1 - Текст',img: 'https://kinoreporter.ru/wp-content/uploads/2019/08/TEXT_70x100-e1565175188212.jpg?x85068'},
    {title: '2 - Вторжение',img: 'https://fankino.ru/wp-content/uploads/2022/08/657fault-2.jpg'},{
      title: '3 - Лёд 2',img: 'https://fankino.ru/wp-content/uploads/2022/03/y4glwf2hk9enshnh4zqg.jpg'
    },
    {
      title: '4 - Не идеальный мужчина',img: 'https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_5f7c35d9f8625710922556c6_5f7c36e1952c3b370e2ebaa8/scale_1200'
  }],
    correct: 2,
  },
  {
    title: 'Мой любимый Сериал?',
    variants: [{title: '1 - Конец ебанного мира',img: 'https://ruvod.com/wp-content/uploads/2018/12/fuck.png'},
    {title: '2 - Звоните Дикаприо',img: 'https://m.media-amazon.com/images/M/MV5BMzE3NjAwZDItZTg5Yi00NWFkLThmOTItNDRjMDQwZmIzY2FkXkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_.jpg'},{
      title: '3 - Бывшие',img: 'https://top10a.ru/wp-content/uploads/2021/04/serialy-poxozhie-na-byvshie.jpg'
    },
    {
      title: '4 - Два холма',img: 'https://pic.rutubelist.ru/video/69/f2/69f2e0f11d26525b2df0354744e37944.jpg'
  }],
    correct: 1,
  },
  {
    title: 'Что я мечтаю сделать в жизни?',
    variants: [{title: '1 - Спрыгнуть с парашюта',img: 'https://roliki-magazin.ru/wp-content/uploads/3/c/2/3c20edf45a6fe3301724fd9c2c54a8c2.jpeg'},
    {title: '2 - Посетить Дубай',img: 'https://image.winudf.com/v2/image1/Y29tLmx1eC5saXZlLndhbGxwYXBlcnMuYW5kLmNyZWF0aXZlLmZhY3Rvcnkud2FsbHBhcGVycy5iYWNrZ3JvdW5kcy5oZC5sd3AuZHViYWkubmlnaHQubGl2ZS53YWxscGFwZXJfc2NyZWVuXzNfMTU0NTUyMTQzM18wMjQ/screen-3.jpg?fakeurl=1&type=.jpg'},{
      title: '3 - Купить машину',img: 'https://i.trse.ru/2019/06/c81e728d9d4c2f636f067f89cc14862c-84.jpg'
    },
    {
      title: '4 - Сняться в фильме для взрослых',img: 'https://graph.digiseller.ru/img.ashx?id_d=3276042'
  }],
    correct: 0,
  },
  {
    title: 'Как ты думаешь на каком фильме я плакал?',
    variants: [{title: '1 - Мстители финал',img: 'https://vsrap.ru/wp-content/uploads/2019/08/orig.jpeg'},
    {title: '2 - Лёд 2',img: 'https://cdnstatic.rg.ru/uploads/images/185/57/97/photorep_imageid_544635_b64c337f934a0901581429555.jpg'},{
      title: '3 - зеленая книга',img: 'https://art-assorty.ru/wp-content/uploads/2019/01/912347-1024x523.jpg'
    },
    {
      title: '4 - 1 + 1',img: 'https://cq.ru/storage/uploads/posts/1449281/1.jpg'
  },
  {
    title: '4 - 50 оттенков серого',img: 'https://jette.ru/wp-content/uploads/2017/02/i-1.jpg'
}],
    correct: 1,
  },
  {
    title: 'Как я на тебя смотрю?',
    variants: [{title: '1 - Вот так',img: 'https://avatars.mds.yandex.net/i?id=99b67e3940158ed9f147a3a1b08e6172ac507573-9181306-images-thumbs&n=13'},
    {title: '2 - Вот так',img: 'https://sun6-23.userapi.com/s/v1/if2/8R16Y9kgY4xcVES6t22XtnDgMJIjwOjInb8bp2bPcGKlHQc564FfOxsdSxp_rrurX7UI1Wgu1OHZG1xzgGel3UR_.jpg?size=830x830&quality=96&crop=185,0,830,830&ava=1'},{
      title: '3 - Вот так',img: 'https://kotclub.ru/wp-content/uploads/2027/04/0.jpg'
    },
    {
      title: '4 - Вот так',img: 'https://i.ytimg.com/vi/bDe9BvXJP0U/maxresdefault.jpg'
  }],
    correct: 3,
  },
  {
    title: 'Кого бы я выбрал?',
    variants: [{title: '1 - Юлю Гаврилину',img: 'https://www.vokrug.tv/pic/news/c/8/d/3/c8d3211323339ef0c4b09904fa3d10a8.jpg'},
    {title: '2 - Валю Карнавал',img: 'https://gorodprizrak.com/wp-content/uploads/2021/12/236565198_263520532251907_8289874008182917042_n.jpg'},{
      title: '3 - Лизу Анохину',img: 'http://allya.ru/wp-content/uploads/2019/12/Liza-Anohina6.jpg'
    },
    {
      title: '4 - Милану Некрасову',img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/04/27/dura.jpg'
  }, {
    title: '5 - Клаву Коку',img: 'https://images.thevoicemag.ru/upload/img_cache/c1f/c1fd2bf048ddfa15a752c621da29cf90_cropped_1332x886.jpg'
},{
  title: '6 - Мирину Fladda',img: 'https://sun3-24.userapi.com/impg/9mfO80rpYNE5kNOwz5ufFbzk_A4XqX_3Oo_TSw/6Um32zMXaQw.jpg?size=2560x1920&quality=95&sign=fa998da9951b8c49a0454477364cc87f&type=album'
},{
  title: '7 - Инста Рину',img: 'https://i.yapx.cc/VTDnj.jpg'
},{
  title: '8 - Воладеморта',img: 'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-94f32b27-e2d5-48a8-a767-228dc237831d'
}],
    correct: 5,
  },
  {
    title: 'Как хочу назвать дочку?',
    variants: [{title: '1 - Катя',img: 'https://umex.ru/files/catalog/photos/57429/1-3.jpg'},
    {title: '2 - Диана',img: 'https://sun9-51.userapi.com/impg/vHXNxcXIinaY1ZMflYB_65npi6ooubUDxzYlHA/kH8UG-ORsIU.jpg?size=604x604&quality=96&sign=f80427890fe144d0b5dd727b8c3b0b42&c_uniq_tag=L8r-Rllv9Z5PJ0Cuga-rJhG-_geh_qjM3A3rXkkXzT0&type=album'},{
      title: '3 - Даша',img: 'https://otkritkis.com/wp-content/uploads/2022/07/qlvdd.jpg'
    },
    {
      title: '4 - Юля',img: 'https://i.yapx.cc/QLdBZ.jpg'
  }],
    correct: 0,
  },
  {
    title: 'Какой у меня размер.... Ноги?',
    variants: [{title: '1 - 43',img: 'https://avatars.mds.yandex.net/i?id=2a0000018b3065049606fb2a5bdd1f6feea7-219455-fast-images&n=13'},
    {title: '2 - 41',img: 'https://sun9-35.userapi.com/impg/LzzS-aJEFKitcNVKn7iB7P0etEGxlSISRLb3bg/MT0mv0VrvZw.jpg?size=604x403&quality=96&sign=60cdc6dad3cc1cf09c832d811e73ca81&type=album'},{
      title: '3 - 45',img: 'https://img.allzip.org/g/373/orig/23102929_9957.jpg'
    },
    {
      title: '4 - 42',img: 'https://avatars.mds.yandex.net/i?id=2697ff01d9851cf0355201282ce31d1b-5237743-images-thumbs&n=13'
  }],
    correct: 3,
  },
  {
    title: 'Что я никогда не прощу?',
    variants: [{title: '1 - Ложь',img: 'https://stihi.ru/pics/2019/09/02/8312.jpg'},
    {title: '2 - Измену',img: 'https://u2.9111s.ru/uploads/202211/25/2de5bc6b8a3d2ddabe2cc2eada7f2e5c.jpg'},{
      title: '3 - Предательство',img: 'https://www.prostudenta.ru/wp-content/auploads/897165/sochinenie-rassuzhdenie.jpg'
    },
    {
      title: '4 - Жеские пранки',img: 'https://i.ytimg.com/vi/OymRumper5Q/maxresdefault.jpg'
  }],
    correct: 2,
  },
  {
    title: 'Что мне важно в девушке?',
    variants: [{title: '1 - Красота',img: 'https://ezo4u.ru/wp-content/uploads/2021/06/h-2929.jpg'},
    {title: '2 - Верность',img: 'https://tayniymir.com/wp-content/uploads/2019/08/1-59.jpg'},{
      title: '3 - не скрывать друг от друга ничего',img: 'https://sun9-4.userapi.com/impf/c637228/v637228300/186bc/f02jl1-Fcts.jpg?size=960x711&quality=96&sign=b23f88a4cc798fe60271fb4f813fa7ac&c_uniq_tag=OwVt0pcaSdR2kPLGGYZnVglZfBQxUGKfLv3yJE_M9cc&type=album'
    },
    {
      title: '4 - Понимание',img: 'https://www.manoverseas.com/wp-content/uploads/2018/02/NavigatingMenMainPic.jpg'
  },    {
    title: '4 - Быть друзьями',img: 'https://cdn.hk01.com/di/media/images/2914102/org/8a95edcb959c78b796ba52a382cbd16e.jpg/nIkQxvIjcAKFcEnIrYGSAUN6Xq8MFxg6ceLKqnHiyqo?v=w1920r16_9'
}],
    correct: 2,
  },
  {
    title: 'Где бы я сделал предложение?',
    variants: [{title: '1 - В ресторане',img: 'https://avatars.dzeninfra.ru/get-zen_doc/1712337/pub_5e6a47be9f72e245cdd02769_5e6a47c183ec3b0c32220c70/scale_1200'},
    {title: '2 - На свидание',img: 'https://zlata-kukla.ru/wp-content/uploads/9/f/2/9f25e2f265131514b73a8f4615fadeee.jpeg'},{
      title: '3 - В любой момент, чтобы она не ожидалла',img: 'https://sun9-16.userapi.com/impf/c847217/v847217359/10ccd2/5E3QvIASRGc.jpg?size=1280x910&quality=96&sign=34f84385965bf39e40e4c207a418e037&c_uniq_tag=o-LLiQ1ymhXB5ylIHLn4L9QiaAacSC6W_WsYOIz4FCI&type=album'
    },
    {
      title: '4 - В машине',img: 'https://kartinkin.net/uploads/posts/2022-03/1647529808_67-kartinkin-net-p-kartinki-v-mashine-79.jpg'
  },    {
    title: '4 - На кухне дома',img: 'https://cdn.fishki.net/upload/post/2022/03/10/4095696/d6d1fc600ccb11513585bfb4d25cdcf0.jpg'
}],
    correct: 2,
  },
  {
    title: 'Что мне важно в девушке?',
    variants: [{title: '1 - Сиськи',img: 'https://cs5.pikabu.ru/post_img/big/2015/08/19/4/1439961214_1596666461.jpg'},
    {title: '2 - Жопа',img: 'https://sun6-20.userapi.com/s/v1/ig2/HwZ6Rt4a46jkUnbtgbGmTE3CiqZAiuDV9xuuF0VnmGy1v7mIVjuNyobxGiWHL61shV-0u7oJDd4P4W_PMzbWAZny.jpg?size=1082x1622&quality=96&crop=59,79,1082,1622&ava=1'},{
      title: '3 - Глаза',img: 'https://javasea.ru/uploads/posts/2022-04/1649423395_glaz-s-otrazheniem-okna.jpeg'
    },
    {
      title: '4 - Улыбка,Глаза,Искренность',img: 'https://sun9-32.userapi.com/impg/dGbzqZQtpdFMiyZD_Iz7_QeM4j-V4pW4IpliRw/xm5GMAWpnLc.jpg?size=2560x2183&quality=95&sign=38daf2ee1a4eb7732924be83bb6b7a68&type=album'
  }],
    correct: 3,
  },
  {
    title: 'Как звали мою первую бывшию?',
    variants: [{title: '1 - Настя',img: 'https://cdn.100sp.ru/pictures/190482488'},
    {title: '2 - Вика',img: 'http://lazar-tex.ru/images/new/960_1440/1928/lazar-180025-134553.jpg'},{
      title: '3 - Даша',img: 'https://i.yapx.cc/QLVdM.jpg'
    },
    {
      title: '4 - Тифани',img: 'https://www.freenamedesigns.com/girl-names/regal-victorian-name-tattoo-designs/tiffany-name-design.jpg'
  }],
    correct: 0,
  },
  {
    title: 'Ты Венера, Я Юпитер?',
    variants: [{title: '1 - Ты Сатурн Я Меркурий',img: 'https://avatars.dzeninfra.ru/get-zen_doc/1721884/pub_5ede29c1c01ef21d6c7dda27_5ede2a2935dcb743973e7f7e/scale_1200'},
    {title: '2 - Ты Морячка Я Моряк',img: 'https://easymp3.ru/uploads/images/t/i/_/ti_morjachka_ja_morjak_ti_morjachka_ja_morjak.jpg'},{
      title: '3 - Ты Москва Я Питер',img: 'https://www.kalita-tour.ru/wp-content/uploads/2017/11/010-2.jpg'
    },
    {
      title: '4 - Ты Адам Я ева',img: 'https://luxurylaunches.com/wp-content/uploads/2016/07/naked-restaurant-paris-1170x767.jpg'
  }],
    correct: 2,
  },
  {
    title: 'Мое любимое мороженное?',
    variants: [{title: '1 - Магнат',img: 'https://mykaleidoscope.ru/uploads/posts/2021-10/1634755926_48-mykaleidoscope-ru-p-morozhenoe-magnat-51.jpg'},
    {title: '2 - Ekzo',img: 'https://avatars.mds.yandex.net/i?id=6d8d81c27c0a5e9d4d067aed1d14cb0236f2454c-10803272-images-thumbs&n=13'},{
      title: '3 - Бон Пари',img: 'https://gastronomglobus.ru/assets/images/products/25781/dzh.jpg'
    },
    {
      title: '4 - Кошмарики',img: 'https://main-cdn.sbermegamarket.ru/hlr-system/-2/01/98/67/40/76/9/100026736912b0.jpg'
  }],
    correct: 1,
  },
  {
    title: 'А я теперь.....',
    variants: [{title: '1 - Скучаю по тебе',img: 'https://funik.ru/wp-content/uploads/2018/10/88e1418ff1fc3af3d508.jpg'},
    {title: '2 - Не сплю ночами',img: 'https://i.ytimg.com/vi/Pd0VEi4LeDU/maxresdefault.jpg'},{
      title: '3 - Думаю о тебе',img: 'https://stihi.ru/pics/2016/04/15/10283.jpg'
    },
    {
      title: '4 - Отпровляю серчдеки',img: 'https://sun9-72.userapi.com/impg/wGAfOWW2AmLm7cpeuhTzFTzKFF6Feq0lpI8QhQ/TmVXgXEJ2PE.jpg?size=981x938&quality=95&sign=7ccba6bac25bbba332ce66c7363ee416&c_uniq_tag=8E7Ocy3xIOy0Y5dfCNXXUw9JZBgSF272nvVpQxOMFMI&type=album'
  }],
    correct: 1,
  },
  {
    title: 'Моя любимая соц сеть?',
    variants: [{title: '1 - Телеграмм',img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612740580_178-p-goluboi-fon-telegramm-225.jpg'},
    {title: '2 - Вк',img: 'https://telegra.ph/file/b9705541cf8a0c50677b1.jpg'},{
      title: '3 - Инстаграм',img: 'https://magsmm.ru/images/blog/Instagram-1_1666526891.jpg'
    },
    {
      title: '4 - Твитер',img: 'https://cybersport.metaratings.ru/storage/images/6c/04/6c0409f33c2c1002e0cd9379d97e21b1.png'
  }],
    correct: 0,
  },
  {
    title: 'Что для меня важнее в жизни?',
    variants: [{title: '1 - Деньги и Власть',img: 'https://api.psychologos.ru/storage/image/495lmtoe.jpg'},
    {title: '2 - Семья и Дети',img: 'https://kz-russia.ru/wp-content/uploads/b/b/8/bb81112a482b1a26fd28789a2816a58d.jpeg'},{
      title: '3 - Образование и Учеба',img: 'https://gorsite.ru/upload/iblock/631/631030657561c0c106697994d984a4bc.jpg'
    },
    {
      title: '4 - Игры и гулянки',img: 'http://otvet.imgsmail.ru/download/262101672_273c87daf0b3bd2ee46a0fa719466a25.jpg'
  }],
    correct: 1,
  },
  {
    title: 'Какой фильм я бы хотел с тобой посмотреть в обнимку?',
    variants: [{title: '1 - Лёд 2',img: 'https://fankino.ru/wp-content/uploads/2022/03/y4glwf2hk9enshnh4zqg.jpg'},
    {title: '2 - Лёд 1',img: 'https://greatgamer.ru/images/news/02.2018/27/news_9056.jpg'},{
      title: '3 - Звоните Дикаприо',img: 'https://ruskino.ru/media/gallery/20309/mvIseLXBsJJ9IjHyaXSA5VHxXj7.jpg'
    },
    {
      title: '4 - Не иделаьный Мужчина',img: 'https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_5f7c35d9f8625710922556c6_5f7c36e1952c3b370e2ebaa8/scale_1200'
  }, {
    title: '5 - Все вместе',img: 'https://kartinkof.club/uploads/posts/2022-06/1655750078_32-kartinkof-club-p-kartinki-s-nadpisyu-vmeste-s-toboi-33.jpg'
}],
    correct: 4,
  },
  {
    title: 'Когда ты мне понравилась?',
    variants: [{title: '1 - 10 июля 2023 года',img: 'http://yankulschool.ru/sites/default/files/2020/pobeda/MyCollages_1.jpg'},
    {title: '2 - 1 сентября 2023 года',img: 'https://100i1prazdnik.ru/wp-content/uploads/2023/08/1-sentyabrya.jpg'},{
      title: '3 - 13 авугста 2023 года',img: 'https://sun1-27.userapi.com/impg/8t0vtPzs2NG38wj0SocSqLk18sXK2lJbdg0jvg/yCv1V4Ivdyo.jpg?size=916x768&quality=96&sign=9c93800be3a37cdffd7fb79d35a61282&c_uniq_tag=LX7Z_2q21_heuw2lt2MR62o5eiA2lkwHZmih95VD_BY&type=album'
    },
    {
      title: '4 - 4 мая 2023 года',img: 'https://avatars.dzeninfra.ru/get-zen_doc/9427399/pub_644271586195f63c2eb425d7_6442717c2f306f688dd11441/scale_1200'
  }],
    correct: 0,
  },
  {
    title: 'Когда я в тебя влюбился?',
    variants: [{title: '1 - 24 сентября 2023 года',img: 'https://sun9-25.userapi.com/impg/NnpZ4CIOgRbzKHNH_ocHOfkrqKDNKsXNfZdBsA/r8mUh1fPUEQ.jpg?size=1280x613&quality=96&sign=cd975c6ff071677667bbcd0a66171ea1&type=album'},
    {title: '2 - 30 сентября 2023 года',img: 'https://hurrytolove.ru/wp-content/uploads/2020/09/147521707493077297-1-768x432.jpg'},{
      title: '3 - 13 авугста 2023 года',img: 'https://sun1-27.userapi.com/impg/8t0vtPzs2NG38wj0SocSqLk18sXK2lJbdg0jvg/yCv1V4Ivdyo.jpg?size=916x768&quality=96&sign=9c93800be3a37cdffd7fb79d35a61282&c_uniq_tag=LX7Z_2q21_heuw2lt2MR62o5eiA2lkwHZmih95VD_BY&type=album'
    },
    {
      title: '4 - 5 октября 2023 года',img: 'https://avatars.dzeninfra.ru/get-zen_doc/4976231/pub_6338fa23df5d464b377d1b51_6338fa2cb14c591cab04aa5e/scale_1200'
  }],
    correct: 3,
  },
  {
    title: 'Песня, которая меня смешит',
    variants: [{title: '1 - Горький вкус',img: 'https://karaokee.ru/wp-content/uploads/2021/04/sultan-laguchev.jpg'},
    {title: '2 - Ты заставлял меня',img: 'https://i.ytimg.com/vi/9j-eqr7fgUo/maxresdefault.jpg'},{
      title: '3 - Иван золо - Белый снег',img: 'https://img.gazeta.ru/files3/931/15945931/IqlKuA2McGE-pic_32ratio_1200x800-1200x800-58584.jpg'
    },
    {
      title: '4 - astral step',img: 'https://i.ytimg.com/vi/qRU2aoiSLlg/maxresdefault.jpg'
  }],
    correct: 2,
  },
  {
    title: 'Моя любимая игра',
    variants: [{title: '1 - Кс го',img: 'https://steamuserimages-a.akamaihd.net/ugc/1860561550030614766/55770DED57BCA44BB401A582B68BE5B4857495C2/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'},
    {title: '2 - Раст',img: 'https://pic.rutubelist.ru/video/1a/21/1a21e530e8a5575aea0ac58fb4e46f91.jpg'},{
      title: '3 - Дота',img: 'https://gas-kvas.com/uploads/posts/2023-02/1675460866_gas-kvas-com-p-fonovii-risunok-dota-4.jpg'
    },
    {
      title: '4 - Си оф зивс',img: 'https://i.pinimg.com/originals/7e/d1/75/7ed175bc5a02bf63c8c91bfe230c3d87.jpg'
  }],
    correct: 1,
  },
  {
    title: 'Мой любимый стиль одежды?',
    variants: [{title: '1 - Кожанный',img: 'https://i.pinimg.com/originals/76/a3/84/76a3847742cc99b28f3a900797d1313a.jpg'},
    {title: '2 - Деловой',img: 'https://cdnn1.img.sputnik-abkhazia.info/img/07e5/06/1e/1032737430_205:0:2934:2047_1920x0_80_0_0_e00dd37d7dbbd97b824f6fdfe0a40f4f.jpg'},{
      title: '3 - Домашний',img: 'https://mykaleidoscope.ru/uploads/posts/2021-11/1636882778_15-mykaleidoscope-ru-p-domashnyaya-odezhda-dlya-devushek-stilnaya-15.jpg'
    },
    {
      title: '4 - По писку моды',img: 'https://i.pinimg.com/originals/3a/38/b3/3a38b3fc6f927ac0aac73f24ca3971ea.jpg'
  }],
    correct: 2,
  },
  {
    title: 'Мои любимые кроссовки?',
    variants: [{title: '1 - Джорданны',img: 'https://sadovod-krossovki.ru/wp-content/uploads/2018/12/air-jordan-1-retro-high-og-orange-555088_113.jpg'},
    {title: '2 - Найк Аир',img: 'https://cdn1.ozone.ru/s3/multimedia-v/6562203535.jpg'},{
      title: '3 - Адидас',img: 'https://slatehowtodoit.com/wp-content/uploads/2019/10/1-2.jpg'
    },
    {
      title: '4 - Из золота блять',img: 'https://images.solecollector.com/complex/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Cw_1200/l0fqelprytpdtjgp7gcn.jpg'
  }],
    correct: 0,
  },
  {
    title: 'Насколько я тобой дорожу?',
    variants: [{title: '1 - 31%',img: 'https://cs8.pikabu.ru/post_img/big/2018/04/24/10/1524590889177527205.jpg'},
    {title: '2 - 12%',img: 'https://sun9-79.userapi.com/impg/qkeGE9TYla3kUsVJs1dAqZh95UEsfOaD8IDWdw/sLyo8nufT2g.jpg?size=604x350&quality=96&sign=d6530f9af3c3d9979641c2fe211a2431&type=album'},{
      title: '3 - 73%',img: 'https://i.ytimg.com/vi/IZWO_bhvyIw/maxresdefault.jpg'
    },
    {
      title: '4 - 3%',img: 'https://s00.yaplakal.com/pics/pics_original/0/0/9/17951900.jpg'
  },    {
    title: '5 - 99%',img: 'https://kartinkof.club/uploads/posts/2022-06/1655822226_42-kartinkof-club-p-kartinki-s-nadpisyu-ti-che-pes-44.jpg'
},{
  title: '6 - 101%',img: 'https://a.d-cd.net/6iZ51Pego43SsjmIenFjgqtnumQ-960.jpg'
},],
    correct: 5,
  },
  {
    title: 'Я тебя очень.....?',
    variants: [{title: '1 - Уебать хочу',img: 'https://www.meme-arsenal.com/memes/fde6952c1293364c4b703a2356a6ada7.jpg'},
    {title: '2 - Пристрелить хочу',img: 'http://risovach.ru/upload/2017/09/mem/preobrazhenskiy-s-drobovikom_155916266_orig_.jpg'},{
      title: '3 - Люблю ❤️❤️❤️❤️❤️',img: 'https://sun6-21.userapi.com/s/v1/if2/qjjaMF7C_wnlKAXqs49mRmOe4C0BNMLQJX4paRKLQmv3Dn5h3RYvb2t36zujN43FPdShFjov9YU7y8MVYXHlt43t.jpg?size=728x870&quality=96&crop=0,0,728,870&ava=1'
    },
],
    correct: 0,
  },
  {
    title: 'Счастья мое...?',
    variants: [{title: '1 - Это быть с тобой🥺',img: 'https://w.forfun.com/fetch/e0/e09d90468342cc78f760895d9c893edf.jpeg'},
    {title: '2 - Запах Сигарет',img: 'https://avatars.yandex.net/get-music-content/95061/4fe5730d.a.7818489-1/m1000x1000?webp=false'},{
      title: '3 - Это думать о еде',img: 'https://img.goodfon.ru/original/2560x1600/e/44/vtorye-blyuda-ryba-kartofel.jpg'
    },
],
    correct: 0,
  },
];

function Result({variants}) {
  return (
    <div className="result">
      <p>Я тебя очень люблю,мне нравиться все, что ты делаешь, мне нравиться находиться с тобой🥺, гулять, ходить в кино, гулять по парку, целоваться, обниматься,просто быть вместе ❤️💟💒 ты такая классная!... Улыбнись, если ты это видишь</p>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {variants} ответа из {questions.length} </h2>
      <a href="">
      <button>Попробовать снова</button>
      </a>

    </div>
  );
}

function Game({variant,trueClick,step}) {
  const pregress = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${pregress}%` }} className="progress__inner"></div>
      </div>
      <h1>{variant.title}</h1>
      
      <ul>
      {variant.variants.map((el,index) => 
    <Variant trueClick={trueClick} index={index} el={el}  />
      )}
      </ul>
    </>
  );
}

function App() {
  const [step,setStep] = useState(0)
  const variant = questions[step]
  const [variants,setVariants] = useState(0)
  const trueClick = (el) => {
    setStep(step + 1)
    if(el == variant.correct){
      setVariants(variants + 1)
    }
  }
  return (
    <div className="sdsd">
    <div className="App">
      {step !== questions.length ?  <Game trueClick={trueClick} step={step} variant={variant} /> :  <Result variants={variants} />}
    </div>
    </div>

  );
}

export default App;