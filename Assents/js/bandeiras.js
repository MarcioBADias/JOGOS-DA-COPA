const bandeiras = {
    brasil: 'https://blogger.googleusercontent.com/img/a/AVvXsEistKMvGMZUQZXjpznOUnJ5FzmYI8cHKzm_P235sEe9u7aoTBmO9NYCetK2cWg7uRGU_D2LJYw3O98RKsMxge7MuMBPs3SD1krCGbHmQ35aRJrQMxTxDKLpJYZPuwWLLR66YhjVhZhdwkJmoS2tLi5XTnKeVHOAQxcUbi7t8Rw6wCc8o-plzRK_w1VV7w=s16000',
    Catar: 'https://blogger.googleusercontent.com/img/a/AVvXsEjQd1fq9Nwigv1k4Pxk5u8QbaxgfBIAh5GEsO5eLBm4vqgznDequcBeqyan5gi4Ih7yOElqRI9PxdwfN7zJXuAkYSL3EJnEufqzAPrNRofcgxx6IOYwRDjmJDdAMFsDhcnxb5oi8k-eqXkdqq0z6-mxLPWiGiIWrpJtbRdtQ3etars2PGWNLE4tckhJfQ=w400-h200',
    alemanha: 'https://blogger.googleusercontent.com/img/a/AVvXsEhonnIt0qgj3jwwuuQRMSG0uNrVU5TCAuP3qp9Rm6FkrewdA0LBdw5u9pIX18KcJdXnKxIJzmz3ViZrzrH2As1SJG0NF2fmNs29A14Q22PkobQsalz561AuJ0MfI7r9oKdan-wYTvigh0dPcijOswVcbLXRAO0HpSSwZBrbgPE6eddedXfZAlDwhlGOUA=s16000',
    argentina: 'https://blogger.googleusercontent.com/img/a/AVvXsEiXU-x7SVtbfY8oqfBVoF_qDZKGYUTx1rVe0VSTTLrtm56IsH1xLZDKJ7He7QZvDtveGenoZNcM2X-WPr5ufwMDEMV5G-xKobf3pJRAr1brkkp92wDs3aDDuFWg1s45xqUpBjXEXhV72EeqaCucmP3WLtDLPE6W8xCQMKN7_YuHvCNcjieNtqULW8YbrQ=s16000',
    belgica: 'https://blogger.googleusercontent.com/img/a/AVvXsEgvkvVGaXznKDKJwrhcd9GTVBSUr8_obXraLR4QOn9N-vQLvKYX0-NX1zQ8jqwJ_njBaQ39yf2Cs5ukzkScoCLew9-OdDBkIApHvbpROllpjHGL1llO-9roPvcvagRNwH1Ei9t6S2PMVpt2d-A3uA5lky5eqjwxTqQlh3dLvN89o5-wyeZEQL2qkheOHA=s16000',
    croacia: 'https://blogger.googleusercontent.com/img/a/AVvXsEgAikDydjdg4Yi8syAncuoYxKIOEvzEzgewtaGUBzSsr-Xa9Yuwmki7y07xXIdQY8USmlUsHLvgqGiKijegWtQjBViJHtpwMcEL8-7ujco6-78zxbvIvKc5IPErdq9h-IQYJftZlYO1JC4LziFT2y1bR04P_9WWXZFrkTUuZ7Hm7eFNLnsRjrqqkB0fAQ=w400-h201',
    dinamarca: 'https://blogger.googleusercontent.com/img/a/AVvXsEgCvkntJyblQ75eQF9e7UZlPNqiB_pU2oKt1N2G3jpIErzGIevFHZhGqk8IJCmHbJVfz_sJECdnFMJnOM8KdEgjWp3e0jJx7M2EX4dRUboJUD-ZL6zI4xVHHWBVoHUGR2q0HTT3xQDj3kNtFExD9yS1ASGT1eszn6YCIGGNBtMtUkF7URi2ht8cqACgYQ=s16000',
    espanha: 'https://blogger.googleusercontent.com/img/a/AVvXsEiVJFuLn_pAyGLbUiMeg1gkQLGPBszdLIn3RKIWiHql1KwVKmry9eBpYZPW7WmYtkpM9s-7dggBBpT8d1NwDEAvL6Sn9wJgDC3sqDB2Z2QLUtcBoxsf0ZPo27c4-9nvdmmMvdU6GyWyL9VaccMpWJ1NvnjnmH3Ctna0jOTGlRHqP6aQ2TZskZNXnoJORw=s16000',
    franca: 'https://blogger.googleusercontent.com/img/a/AVvXsEibWAX90IveJHTS1VzHRxKfqR4sPgBAjm7WBj3gZu-EsX43QVeU72d8njgG5UeG9u0CkSgHlNXLe7RVkKi0UmD7weFcfepQVOybtf6yMvQD_ejPm2qIP-qjuL00ZAmuKHiGEixtzwTQ9Sp8GB9eGuOf6kPAlxxe0IKr6rpGlWUqkeYhCH6NXFqcwGjSCw=s16000',
    holanda: 'https://blogger.googleusercontent.com/img/a/AVvXsEg_MUFFY-OYHhdo9SYusVdd1xgf82A_cXAGq0XHd3NNCSGnzucnejQ6OZcmRPvDOcvz_ShFE5ajQ4xZABDHQM8bDfiiQ3nBoU52AJuz7asTdO9pPf8x6n7QBX7_m969SqeJtWAGhoxK7eJQXVm-iOJxG4UyJ1MjGIGd8Ug5BcagwLH6U_9YUL4R4dLZAQ=s16000',
    inglaterra: 'https://blogger.googleusercontent.com/img/a/AVvXsEit2VyAaz6GiMA51mH3Ptwxx7dI-y4Qg_st4l-HBnB97oqzssJc8WZwbwMJmazE7cjRuBQfOqWNX11dnpOSG-ebZnz1vDU27RoPz9aQd9wkMdvyxDVDrUCoTTC7s2UQMpyyn21Y8hvH5bxzhCB96-ToWalKUl5mxcx2J3Bw1GstRY_Y8oqI07hyHZNfNQ=w400-h238',
    ira: 'https://blogger.googleusercontent.com/img/a/AVvXsEirbY1qTUdgwsPXNeifQL5BgFMR-etuGxtKhVdfjFtQ3iANVK-uyzkn4bg89WCSrXhRsgJiCZ-ApIkhvS65EaPHkVqCkpWSBv3SM0DyBMN9pq1_56TO1Ht8NESzdvVa2rJnq9UU2aVFvLvnI0WPtuUGAa0i0UII5RwLitg2zj5rpRnOCLXRS4JMDYHbfA=s16000',
    servia: 'https://blogger.googleusercontent.com/img/a/AVvXsEj8QV7_w-naOXUv0XVCEp3KxIy0-n3saBLxVApuYWQxovE5hFkX2QEq1qoD0DwMS3G4ZrfkCulvNoDWEOoknVeFwtWA899brEeJribpvHjNpWGrlBrUUNMlTuqUJ80XmNlpdK_eDfCy76clT4tRLRt3hAtH-hXPpxFy35bvmFw-l9uVn5AmFajkH2x4kw=w400-h268',
    suica: 'https://blogger.googleusercontent.com/img/a/AVvXsEjc4q9hMWrA8Jgjo0OFHnUVYWn-epNkHI3D-CeQKcJcFLK2Ex3jveIUib2luktQ5NOrRD1rqSG7dZ21r3JzuUybGkXIhUJLn6dKaRFOq1CUr5DyfBGokeeeViVzTp2p3MW9EGl1dKIlxA8qhr00g4zdASypAgOqfBUDpqYutyvnHumkAlbtqvZp7H3FLQ=s16000',
    coreiaDoSul: 'https://blogger.googleusercontent.com/img/a/AVvXsEgQMGohgttK5ouY6msfZEPeWTn5Sb9msQ_47aNGzoE3tGvpIu1izHXyv0hVmY9a31HC_DH9UNnSNbE8Ah6NvzyKXyjzccFgBW95syF4V6RBo3V7W0VNrZ-gvJx2dKAfCbVKDxk8a2GtTE3PPVrpreu_DI9YIsFZ96a4HBLjBPM05AweW2QW0tADso-M4w=s16000',
    equador: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghUTqqkkPNtBa1doZITgMydztuyuqN5CVYj0FMfI58CZnKBA_J6KTlSeSAz5_lpH1qAGsnh6dAJMBGLCjHOqO1ufqVZMMbGdGyjbhRpFIpV3gBjWNKRhnFTQqyYRm1Nw7FX_e6RHuW_IZ8xlDAJzKgvGemk8F9jbm6S02IrlSPASeWr5DF0YsUT2ZD-g/s16000/Equador.png',
    uruguai: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4WBNWt-kDNEOUfIZQ4L6RKAbs0d-na9E21uvaoQ-CupOctsa2eGmCHOtoYHE95nhv0_o26Q-Ojr0byW7fGR9Gekxxw-ZfSRZkMeVPSRYIapZ1DRTwmVjvEzfXeypTJKHVOYsQRMADYkSm7WZmmfFr1h3-2VQyMD72n4O9gb4NIojUqHJJkdLo8Xgdrg/w640-h432/Uruguai.png',
    japao: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzqlHy3hZIF5lk61hHRbISOUICiK_VyemRPEpk1qJveg7F_dWoHQ9Fn1BNv9C-PmbxGMBDkoNQIMCvTpl4WGo3Xtza7-pj1hAj0pSWIsXHr7zSf8ZT3DhnFSkaDqV4GUJONf-cnhIb42NPW0VWmiRdte5WQRKSZzL33ZTgT0Rt68nwj-3eQ5BSHupTAQ/s16000/Jap%C3%A3o.png',
    arabiaSaudita: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZ7Um0vj6yos3PiUe2x_Mz_h436YQfJujB0euJLqQdZCqNgzcFz4vSHQN6sVqy2TRgy8T1ohxq5rZpnsLS7ZfyKb0uGiVA09fKtOg3BvBy82A8NdpGSMssb0wM28iM6UEfTyiRK7k_c63qZP8c-OZixjGP3WtdbDdGiZqZfzlfAtvgYpo8ctL3jLGM9A/s16000/Ar%C3%A1bia%20Saudita.png',
    canada: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguVIiXamcv8aJXpWv5WCPMN0o6yzMak8Oph95OiBfxSqD62YUfvDlMpd9UWNNrF3Qx6AhebBFVempwBmoaKJrOdcoIwuJA3Ge_9moO0A5pY4rKPpxAhzAeZuoaqZAM48WrHzS9OiM_xrGjRM8R0X_MiCDprp1-KATVxmpeDFEDD1v-4yPawxXgGP_RrA/w400-h201/Canad%C3%A1.png',
    gana: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW-RE8atDpWEb3sCrH3OOkIhR1h-B2vCqDSrDlK7r8K7etGMp5NIg8DbFhzzAx2jooDE1DZOaR72ce0wcaJAIyptrTbgHkdyYrt-ps0o4i0syQx4fGOyMmz65kEqOlw6KaNvESxOlw_7sSeJxKoZVl2xbrximGmyGEH_-IeRmBECRiZEHPkZs3xV__RQ/s16000/gana.png',
    senegal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0dUjlrII2HzJeA7EPggmTSFu1qy_YFP4lQlNhIE7sc8KFMcEJmC9ygrVJx8c7g2XdDLwO5liQO7vqTp9jUBWvq1-sezdk63j8Iu29E7s6TFw0APC5sxUMr6oo57sEfe8wBERIrrvzOfrssOmv5QapyOnYLiVduaFztMaUAudnPQXtbcB0TfDq-BQ2ZA/s16000/senegal.png',
    marrocos: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ2uiP8TQiXgrt_QhC8wwvShP9ZNAfq0FC1BZeMlFVCsurfOKDSF6VD3e43yyfDH1eViNNQ4xVn8t0Jszeie8jMcdAO_kJ4bPZZehQT7c0-8AdCrYXy-AwzZS4SQ5n_wrRIbBXCrHp4XeJqtTbVzaHO5IIBZgcZN5bjJq3O_FG8vxupaABtj-Ly7gVww/s16000/marrocos.png',
    tunisia: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNmH0RS564657WK_Mb48Q5zog_G8YQ0u2nq61-G7WLDIoBbRzfetTLhgfkd3hGOviKZ5YOrfbVvtX6i2pUEFFM6iNbEGqaXVZMmAEO6FVw6DLgCPoEtUNDl3voi_3qvN9Fkc1Fp2eqn1HdGrgEclQixUhzz7L5GundzaZwNI3enL9olvoY27F3Lu4gWw/s16000/tun%C3%ADsia.png',
    camaroes: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4RTybqpejhaDmyfJ8U88UgjyV7Y-DEvUMluqPx_1Jd9QuGrWP4YB7gvTFnDMaIVtO7UxE0f84lGZ0qMRVepDnX794PC8ebNlKf3GzmCmQqI5trlU3boUrgPjCMmEmH69voI91U0dSZUuCoyQBFOq3Qa1ahXr_aesiA3SSC8zk3Eewe-DYtxlMa_uJLg/s16000/camar%C3%B5es.png',
    eua: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLMKKA5KVxTdGuxZp0S9WRirMW9zjmrXFE1B14qo1wsd1JCmoraoXGA2OlQX0rLudL-brg46Ol4_vVQs-sns-c538bwTXQ881H7ZuxOxWJppGFWMoP2ZqNm1-n5rJwDbl8phdTihnQ0P0r1CYP0hOpnZ39QmWPPS_bawLBIINTBGZ7laUvOmiDFbsJqg/s16000/estados%20unidos.png',
    mexico: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAXzXqtk4KHZXQDMpdCMoSsD6H48pKyaLZjPPXhWn_xfBijRI3IEY0Na4Tp7F8wTJLL5dTOE8afG7-pCBk6baJXs0IjFImEpUppQuozlcksR_yAyUQWLu0Y-gTKahEWPco4ARjo5Vm3Xmjqm_4qntDicSDgKnrb3bGWouDWtpwhqAzuDKHj6CxUGf9Pg/s16000/mexico.png',
    portugal: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv7uIwxsiy500r3h-M_7kpyLlyqAkdes81jUMT3f-GDuTi1Z_Dh2f9U5p-buNqWYVLuClCuOAkfz6nt_U0qJTLBXONBut7_85kHW1AHjZsry3qSWdLohGtz3y8gFeHrnvQBovV33Fmaj1xitrb7ZuFtfUKFIdDaUWF9HM9xKGmRpj_W_xVUEu06faqoQ/s16000/portugal.png',
    polonia: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij5v8PduBk5wM59Fa9vyg6U5wVBrvEeCE2w6q6dSARs9H8hO8oyRX-N9zr3j1samVVyhKD1GzqZF6N5AtbBOczlYiiknK4AEXeaWRWblk1jA5GutqySmKL-9Lsl6Q902vAmcDRCxjBSBNdfissNIOXhziZK_5aP1usU0prJfYL9-Tj_XvOZycbBLO2xA/s16000/polonia.png',
    paisDeGales: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQMw59qa_96ymsolWfWv9sE9R5guY7oOcEgEua34ia3lJFUlVikpCIDBWKJoM0F5WWmqXXs_Ass6kLsNL4O8pCGd93ioerxA9Ys1_V2LjElh0Yd1ykn4S5FGNLpeNvcy8-IikUYcvWvfhy92_GJgdqfycXS_hyALNDWGkuiCGFI9aKu2PLGBOnm493DQ/w400-h240/Bandeira%20do%20Pa%C3%ADs%20de%20Gales.png',
    australia: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfCiYTmof8CWGHXzOsI_FadHGk8VQHi3_S5ZI9jVOnZEGuqTkSboXd6jZapjY4eAhkRz5luSJNqASwKklTpf0B7wmuu86YiNbjm9wYMWBDyY1hwHejw2QwplSZQsx0Z16xAn82qt1cdi0V-pqh9uHoNpUYwjEsIqVxsBUH-Q1x49RJoyHSW8jVDGpu7Q/w400-h200/Bandeira%20da%20Austr%C3%A1lia.png',
    costaRica: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHgzR2n_ttGc-8-TkPaNiKuzA2ijCxRJ4DW0DIkv0xVdmIMpWanSByYjBVf1Z--BQIr9-Uds75AuHLcYqlas-QKLr7gfE6whPzzD2wbiOfFm4Eu5CmIJFoxSCGm7cXZ0MRyiKMAj7JCoQsWpBmXJH27TLToug41mF94lG4Fee8s8W2mdEtqtV-_DWoUw/w400-h240/Bandeira%20da%20Costa%20Rica.png'
}

let areaDeJogo1 = document.querySelector("#score_area__marcio");
let areaDeJogo2 = document.querySelector("#score_area__miguel");


const criandoJogoMarcio = (bandeiras = [], result = []) => {
    let newSeat = '';
    newSeat = `<div class="seat">
    <img src="${bandeiras[0]}" class="art_area__logo"> <input type="number" class="art_area__imputScore1" value="${result[0]}"> x <input type="number" class="art_area__imputScore2" value="${result[1]}"> <img src="${bandeiras[1]}" class="art_area__logo">
    </div>`;
    areaDeJogo1.innerHTML += newSeat;
}

const criandoJogoMiguel = (bandeiras = [], result = []) => {
    let newSeat = '';
    newSeat = `<div class="seat">
    <img src="${bandeiras[0]}" class="art_area__logo"> <input type="number" class="art_area__imputScore1" value="${result[0]}"> x <input type="number" class="art_area__imputScore2" value="${result[1]}"> <img src="${bandeiras[1]}" class="art_area__logo">
    </div>`;
    areaDeJogo2.innerHTML += newSeat;
}

criandoJogoMarcio([bandeiras.Catar, bandeiras.equador], [1,1]);
criandoJogoMiguel([bandeiras.Catar, bandeiras.equador], [2,3]);

criandoJogoMarcio([bandeiras.senegal, bandeiras.holanda], [1,3]);
criandoJogoMiguel([bandeiras.senegal, bandeiras.holanda], [1,0]);

criandoJogoMarcio([bandeiras.inglaterra, bandeiras.ira], [3,0]);
criandoJogoMiguel([bandeiras.inglaterra, bandeiras.ira], [0,0]);

criandoJogoMarcio([bandeiras.eua, bandeiras.paisDeGales], [1,1]);
criandoJogoMiguel([bandeiras.eua, bandeiras.paisDeGales], [1,1]);

criandoJogoMarcio([bandeiras.argentina, bandeiras.arabiaSaudita], [3,0]);
criandoJogoMiguel([bandeiras.argentina, bandeiras.arabiaSaudita], [7,5]);

criandoJogoMarcio([bandeiras.mexico, bandeiras.polonia], [0,1]);
criandoJogoMiguel([bandeiras.mexico, bandeiras.polonia], [1,0]);

criandoJogoMarcio([bandeiras.dinamarca, bandeiras.tunisia], [2,1]);
criandoJogoMiguel([bandeiras.dinamarca, bandeiras.tunisia], [3,2]);

criandoJogoMarcio([bandeiras.franca, bandeiras.australia], [4,0]);
criandoJogoMiguel([bandeiras.franca, bandeiras.australia], [3,0]);

criandoJogoMarcio([bandeiras.alemanha, bandeiras.japao], [1,0]);
criandoJogoMiguel([bandeiras.alemanha, bandeiras.japao], [0,3]);

criandoJogoMarcio([bandeiras.espanha, bandeiras.costaRica], [2,0]);
criandoJogoMiguel([bandeiras.espanha, bandeiras.costaRica], [0,1]);

criandoJogoMarcio([bandeiras.marrocos, bandeiras.croacia], [0,2]);
criandoJogoMiguel([bandeiras.marrocos, bandeiras.croacia], [0,0]);

criandoJogoMarcio([bandeiras.belgica, bandeiras.canada], [4,1]);
criandoJogoMiguel([bandeiras.belgica, bandeiras.canada], [3,5]);

criandoJogoMarcio([bandeiras.servia, bandeiras.camaroes], [2,2]);
criandoJogoMiguel([bandeiras.servia, bandeiras.camaroes], [3,4]);

criandoJogoMarcio([bandeiras.brasil, bandeiras.suica], [3,0]);
criandoJogoMiguel([bandeiras.brasil, bandeiras.suica], [1,1]);

criandoJogoMarcio([bandeiras.uruguai, bandeiras.coreiaDoSul], [3,1]);
criandoJogoMiguel([bandeiras.uruguai, bandeiras.coreiaDoSul], [10,0]);

criandoJogoMarcio([bandeiras.portugal, bandeiras.gana], [2,1]);
criandoJogoMiguel([bandeiras.portugal, bandeiras.gana], [13,13]);
