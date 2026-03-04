window.languageMs = {
  "story": {
    "intro_walk": {
      "bg": "street",
      "sprite": null,
      "narrator": true,
      "text": "Jam menunjukkan pukul 11 malam. Anda berjalan pulang dari kedai serbaneka melalui lorong yang sunyi.",
      "next": "kidnap_moment"
    },
    "kidnap_moment": {
      "bg": "street",
      "sprite": null,
      "narrator": true,
      "text": "Bunyi cengkerik menemani langkah anda. Tiba-tiba, anda terdengar bunyi tapak kaki laju di belakang anda.",
      "next": "blackout_hit"
    },
    "blackout_hit": {
      "special": "blackout",
      "narrator": true,
      "text": "GEDEBUK!!\n\nSatu pukulan kuat hinggap di kepala anda. Pandangan anda menjadi gelap serta-merta.",
      "next": "wakeup_room"
    },
    "wakeup_room": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "fadein",
      "text": "Kepala anda berdenyut sakit. Anda membuka mata perlahan-lahan.\n\nIni... bukan bilik anda. Tangan anda terikat pada kepala katil.",
      "next": "maimy_enter"
    },
    "maimy_enter": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Selamat pagi, sayang! Nyenyak awak tidur? Saya risau tau awak tak bangun-bangun dari semalam.",
      "next": "first_choice"
    },
    "first_choice": {
      "bg": "room",
      "sprite": "lookPsyko",
      "name": "Maimy",
      "text": "Jangan risau, saya ikat awak longgar je. Supaya awak tak 'sesat' lagi macam semalam.",
      "choices": [
        {
          "text": "Lepaskan aku! Siapa kau?!",
          "delta": -0.3,
          "next": "path_angry"
        },
        {
          "text": "Kepala saya sakit... air...",
          "delta": 0.1,
          "next": "path_calm"
        }
      ]
    },
    "path_angry": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Shhh... jangan jerit. Jiran tak suka bising. Saya Maimy. Dan mulai hari ni, saya penjaga awak. Faham?",
      "choices": [
        {
          "text": "Kau gila! Aku nak balik!",
          "delta": -0.4,
          "next": "trigger_death"
        },
        {
          "text": "Baik... saya faham.",
          "delta": 0.1,
          "next": "path_calm"
        }
      ]
    },
    "path_calm": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Kesiannya... mesti sakit kan kena pukul semalam? Maaf ya, saya terpaksa. Kalau tak, awak takkan ikut saya balik.",
      "next": "feeding_time"
    },
    "feeding_time": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Nah, saya masak bubur. Buka mulut... Aaaa...",
      "choices": [
        {
          "text": "(Makan) Terima kasih, Maimy.",
          "delta": 0.2,
          "next": "day_1_end"
        },
        {
          "text": "(Ludah makanan) Aku tak nak makanan kau!",
          "delta": -0.5,
          "next": "trigger_death"
        }
      ]
    },
    "day_1_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "Anda memilih untuk patuh. Maimy tersenyum puas dan menyuapkan makanan sehingga habis. Malam pun berlabuh...",
      "next": "day_2_start"
    },
    "day_2_start": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Keesokan harinya... Maimy bersiap sedia dengan beg tangan. Dia kelihatan ceria.",
      "next": "maimy_leaving"
    },
    "maimy_leaving": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Saya kena keluar beli barang dapur sekejap. Saya tak ikat awak hari ni, tapi pintu saya dah kunci. Jangan nakal-nakal ya?",
      "choices": [
        {
          "text": "Okay, hati-hati.",
          "delta": 0.1,
          "next": "alone_start"
        },
        {
          "text": "Bawa aku sekali!",
          "delta": -0.2,
          "next": "alone_angry"
        }
      ]
    },
    "alone_angry": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Tak boleh! Dunia luar bahaya. Awak duduk sini diam-diam. Nanti saya belikan gula-gula.",
      "next": "alone_start"
    },
    "alone_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Maimy keluar dan mengunci pintu. Anda kini keseorangan di dalam bilik.",
      "next": "exploration_choice"
    },
    "exploration_choice": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Apa yang anda mahu lakukan?",
      "choices": [
        {
          "text": "Geledah Laci Meja",
          "delta": 0,
          "next": "check_drawer"
        },
        {
          "text": "Periksa Tingkap",
          "delta": 0,
          "next": "check_window"
        }
      ]
    },
    "check_drawer": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Anda menjumpai sebuah diari lama. Isinya penuh dengan gambar anda yang diambil secara senyap sejak setahun lalu. 'Dia akhirnya milikku...', tulisnya.",
      "next": "maimy_return_sound"
    },
    "check_window": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Tingkap itu dipaku dengan papan tebal dari luar. Mustahil untuk dibuka tanpa alatan berat. Anda terperangkap.",
      "next": "maimy_return_sound"
    },
    "maimy_return_sound": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "KLIK! Bunyi kunci pintu dibuka. Maimy sudah pulang lebih awal dari jangkaan!",
      "next": "gift_scene"
    },
    "gift_scene": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Saya dah balik! Rindu saya tak? Saya ada belikan hadiah istimewa untuk awak.",
      "choices": [
        {
          "text": "Hadiah apa?",
          "delta": 0.1,
          "next": "gift_reveal"
        },
        {
          "text": "Aku tak nak hadiah kau.",
          "delta": -0.2,
          "next": "gift_reveal_force"
        }
      ]
    },
    "gift_reveal": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Nah... (Dia mengeluarkan rantai leher berloceng). Pakai ni? Supaya saya tahu mana awak pergi dalam rumah ni.",
      "next": "wear_collar_choice"
    },
    "gift_reveal_force": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Jangan sombong. Nah, pakai rantai ni. Kalau tak, saya ikat awak balik kat katil.",
      "next": "wear_collar_choice"
    },
    "wear_collar_choice": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "(Maimy memegang rantai itu sambil tersenyum menakutkan)",
      "choices": [
        {
          "text": "(Pakai) Cantik...",
          "delta": 0.3,
          "next": "true_love_dinner"
        },
        {
          "text": "(Lempar) Aku bukan anjing kau!",
          "delta": -0.5,
          "next": "trigger_death"
        }
      ]
    },
    "true_love_dinner": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Anak yang baik... Jom makan? Saya masak daging istimewa hari ni.",
      "next": "meat_joke"
    },
    "meat_joke": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Sedap tak? Daging ni... dari orang yang cuba kacau awak minggu lepas.",
      "choices": [
        {
          "text": "Apa?! (Muntah)",
          "delta": -0.2,
          "next": "joke_reveal"
        },
        {
          "text": "Sedap... terima kasih.",
          "delta": 0.4,
          "next": "stockholm_end"
        }
      ]
    },
    "joke_reveal": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Hahaha! Gurau je lah. Tu daging lembu. Awak ni comel bila takut. Jom tidur?",
      "next": "survival_end"
    },
    "trigger_death": {
      "special": "die"
    },
    "stockholm_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "[ TRUE YANDERE ENDING ]\nAnda menerima kegilaan Maimy. Anda berdua hidup bahagia dalam dunia kecil ini... selamanya.",
      "next": "day_3_start"
    },
    "survival_end": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "[ SURVIVAL ENDING ]\nAnda terselamat untuk satu lagi hari. Tetapi adakah anda akan bebas? Mungkin tidak.",
      "next": "day_3_start"
    },
    "day_3_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "fadein",
      "text": "HARI KETIGA...\n\nCahaya matahari pagi memancar masuk melalui celah papan tingkap yang dipaku. Anda masih hidup. Udara di dalam bilik terasa berat dan berbau ubat antiseptik.",
      "next": "d3_wake_up"
    },
    "d3_wake_up": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Anda cuba menggerakkan tangan. Rantai besi pada pergelangan tangan anda bergeser menghasilkan bunyi nyaring. Tiba-tiba, pintu bilik diketuk perlahan dari luar.",
      "next": "d3_maimy_enters"
    },
    "d3_maimy_enters": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Selamat pagi, sayang! Saya dengar bunyi rantai tu... awak dah bangun rupanya. Nampak comel sangat awak tidur malam tadi.",
      "next": "d3_breakfast_tray"
    },
    "d3_breakfast_tray": {
      "bg": "room",
      "sprite": "smile",
      "narrator": true,
      "text": "Maimy melangkah masuk membawa sebuah talam berisi sarapan. Ada roti bakar yang dipotong kemas berbentuk hati, dan segelas susu suam.",
      "next": "d3_breakfast_talk"
    },
    "d3_breakfast_talk": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Saya buatkan khas untuk awak. Penat saya potong bentuk hati ni tau. Jom, buka mulut... saya suapkan.",
      "choices": [
        {
          "text": "(Makan) Sedapnya... terima kasih Maimy.",
          "delta": 0.15,
          "next": "d3_breakfast_eat"
        },
        {
          "text": "Dalam susu ni... awak letak ubat tidur lagi ke?",
          "delta": -0.2,
          "next": "d3_breakfast_question"
        }
      ]
    },
    "d3_breakfast_eat": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Hehe, bagusnya kesayangan saya ni. Makan banyak-banyak ya, supaya awak kuat. Kita ada banyak masa nak dihabiskan berdua hari ni.",
      "next": "d3_post_breakfast"
    },
    "d3_breakfast_question": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Ubat tidur? Awak ingat saya ni jahat sangat ke? Saya cuma nak pastikan awak rehat... Tapi hari ni tak ada ubat. Minum je.",
      "next": "d3_post_breakfast"
    },
    "d3_post_breakfast": {
      "bg": "room",
      "sprite": "blush",
      "narrator": true,
      "text": "Selesai menyuap sarapan, Maimy mengambil kain lembap dan mengelap mulut anda dengan sangat lembut. Terlalu lembut sehingga meremangkan bulu roma.",
      "next": "d3_sudden_knock"
    },
    "d3_sudden_knock": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "BAM! BAM! BAM!\n\nTiba-tiba kedengaran bunyi ketukan kuat dari pintu utama rumah di tingkat bawah.",
      "next": "d3_maimy_freeze"
    },
    "d3_maimy_freeze": {
      "bg": "room",
      "sprite": "serious",
      "narrator": true,
      "text": "Pergerakan Maimy terhenti serta-merta. Senyumannya mati. Matanya merenung tajam ke arah pintu bilik.",
      "next": "d3_visitor_voice"
    },
    "d3_visitor_voice": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "SUARA LELAKI DARI LUAR: 'Helo! Cik Maimy! Ada bungkusan kurier ni! Perlu tandatangan! Boleh buka pintu kejap?'",
      "next": "d3_maimy_panics"
    },
    "d3_maimy_panics": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Shhh! (Maimy meluru ke arah anda dan menekup mulut anda dengan tangannya yang sejuk). Jangan buat sebarang bunyi.",
      "next": "d3_maimy_threatens"
    },
    "d3_maimy_threatens": {
      "bg": "room",
      "sprite": "serious",
      "name": "Maimy",
      "text": "Dengar sini sayang... Kalau awak berani keluarkan suara walaupun sikit, abang posmen tu takkan balik jumpa keluarga dia malam ni. Faham?",
      "choices": [
        {
          "text": "(Meronta dan gigit tangannya) TOLONG!! SAYA KAT SINI!!",
          "delta": -0.4,
          "next": "d3_shout_help"
        },
        {
          "text": "(Angguk perlahan dan tahan nafas)",
          "delta": 0.2,
          "next": "d3_stay_quiet"
        }
      ]
    },
    "d3_shout_help": {
      "bg": "room",
      "sprite": "angry",
      "narrator": true,
      "text": "Anda menggigit tangan Maimy dan menjerit sekuat hati. Maimy tidak menjerit kesakitan, sebaliknya merenung anda dengan senyuman yang sangat mengerikan.",
      "next": "d3_maimy_kills_postman"
    },
    "d3_maimy_kills_postman": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Ah... awak buat saya terpaksa sepahkan rumah ni. Kenapa awak nakal sangat? Duduk diam-diam. Saya pergi 'selesaikan' tetamu kita.",
      "next": "d3_postman_dead_end"
    },
    "d3_postman_dead_end": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "blackout",
      "text": "Maimy turun ke bawah. Tidak lama kemudian, kedengaran bunyi jeritan panik disusuli bunyi tetakan yang tumpul. Kemudian... sunyi sepi.",
      "next": "d3_maimy_blood_return"
    },
    "d3_maimy_blood_return": {
      "bg": "room",
      "sprite": "killer",
      "narrator": true,
      "special": "fadein",
      "text": "Maimy pulang ke bilik. Wajah dan bajunya dipenuhi percikan darah segar. Dia memegang sebilah pisau pemotong daging.",
      "next": "d3_punishment_time"
    },
    "d3_punishment_time": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "Itu salah awak. Dia mati sebab awak cuba minta tolong. Sekarang... saya kena ajar awak supaya tak buat lagi.",
      "next": "trigger_death"
    },
    "d3_stay_quiet": {
      "bg": "room",
      "sprite": "smile",
      "narrator": true,
      "text": "Anda menahan nafas. Maimy tersenyum puas, melepaskan mulut anda perlahan-lahan, dan mencium dahi anda sebelum keluar ke ruang tamu.",
      "next": "d3_alone_moment"
    },
    "d3_alone_moment": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Dari bawah, anda dengar suara Maimy bercakap dengan lembut dan mesra dengan posmen tersebut. Lakonannya sangat sempurna.",
      "next": "d3_maimy_returns_happy"
    },
    "d3_maimy_returns_happy": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Saya dah balik! Abang posmen tu dah pergi. Nampak tak? Kalau awak dengar cakap, takde siapa yang akan terluka.",
      "next": "d3_reward_time"
    },
    "d3_reward_time": {
      "bg": "room",
      "sprite": "smile",
      "name": "Maimy",
      "text": "Sebab awak jadi budak baik hari ni, saya ada hadiah. Saya akan buka ikatan rantai ni sekejap. Tapi awak cuma boleh bergerak dalam bilik ni je.",
      "next": "d3_untie_hands"
    },
    "d3_untie_hands": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "KLIK. Rantai yang mencengkam tangan anda dibuka. Anda menggosok pergelangan tangan yang lebam kemerahan. Akhirnya, anda boleh berdiri.",
      "next": "d3_maimy_cook_excuse"
    },
    "d3_maimy_cook_excuse": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Saya nak pergi dapur kat bawah sekejap, nak sediakan makan malam istimewa. Jangan cuba-cuba buka pintu bilik ni, saya dah kunci dari luar.",
      "next": "d3_explore_start"
    },
    "d3_explore_start": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Pintu ditutup rapat dan bunyi kunci diputar kedengaran. Anda kini berseorangan di dalam bilik tanpa diikat. Masa untuk mencari jalan keluar atau petunjuk.",
      "choices": [
        {
          "text": "Periksa tingkap yang dipaku.",
          "delta": 0,
          "next": "d3_check_window"
        },
        {
          "text": "Geledah almari pakaian Maimy.",
          "delta": 0,
          "next": "d3_check_closet"
        }
      ]
    },
    "d3_check_window": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Tingkap itu ditutup dengan beberapa kepingan kayu tebal. Anda cuba menolaknya, tetapi paku yang digunakan sangat panjang dan kukuh. Tiada celah untuk melarikan diri.",
      "next": "d3_explore_continue"
    },
    "d3_explore_continue": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Anda mesti mencari sesuatu yang lain sebelum Maimy kembali.",
      "choices": [
        {
          "text": "Geledah almari pakaian Maimy.",
          "delta": 0,
          "next": "d3_check_closet"
        }
      ]
    },
    "d3_check_closet": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Anda membuka almari pakaian perlahan-lahan supaya tidak berbunyi. Di sebalik deretan baju, terdapat sebuah kotak kecil berwarna hitam di sudut bawah.",
      "next": "d3_open_box"
    },
    "d3_open_box": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Anda membuka kotak tersebut. Dada anda berdegup kencang. Di dalamnya terdapat dompet anda, telefon pintar anda (yang telah dipecahkan skrinnya), dan berpuluh keping gambar candid anda.",
      "next": "d3_creepy_photos"
    },
    "d3_creepy_photos": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "Gambar-gambar tersebut diambil sejak beberapa bulan lalu. Gambar anda di kafe, di stesen bas, malah gambar anda sedang tidur melalui tingkap bilik anda sendiri!",
      "next": "d3_maimy_returns_sudden"
    },
    "d3_maimy_returns_sudden": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "text": "KLAK! Bunyi tombol pintu dipulas. Maimy masuk ke dalam bilik membawa dulang makanan malam.",
      "next": "d3_caught_snooping"
    },
    "d3_caught_snooping": {
      "bg": "room",
      "sprite": "serious",
      "name": "Maimy",
      "text": "Sayang... awak buat apa dekat almari tu? (Maimy meletakkan dulang makanan dan merenung tajam ke arah kotak di tangan anda).",
      "choices": [
        {
          "text": "S-saya cuma cari baju sejuk. Sejuk sikit kat sini.",
          "delta": 0.1,
          "next": "d3_lie_excuse"
        },
        {
          "text": "Gambar apa semua ni Maimy?! Awak ni gila ke (Pegang kotak).",
          "delta": -0.3,
          "next": "d3_confront_box"
        }
      ]
    },
    "d3_lie_excuse": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Oh... sejuk ya? Kesiannya sayang saya. Mari sini duduk kat katil, saya pakaikan selimut. Kotak tu... jangan sentuh ya. Itu memori berharga saya.",
      "next": "d3_dinner_start"
    },
    "d3_confront_box": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "Gila? Saya buat semua tu sebab saya CINTAKAN awak! Takde orang lain yang perhatikan awak siang dan malam macam saya buat! Jangan panggil saya gila!",
      "next": "d3_dinner_forced"
    },
    "d3_dinner_forced": {
      "bg": "room",
      "sprite": "killer",
      "narrator": true,
      "text": "Maimy menolak anda kasar ke atas katil dan merampas kotak tersebut. Dia merenung anda dengan nafas tercungap-cungap sebelum emosinya kembali tenang secara mengejut.",
      "next": "d3_dinner_start"
    },
    "d3_dinner_start": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Maafkan saya kalau saya garang sikit. Jom makan malam. Hari ni saya masak stik daging istimewa. Sambil makan, kita borak ya?",
      "next": "d3_dinner_chat"
    },
    "d3_dinner_chat": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Sayang... jujur dengan saya. Awak masih rindu kehidupan luar awak ke? Kerja awak, kawan-kawan awak tu?",
      "choices": [
        {
          "text": "Tipulah kalau tak rindu. Saya nak balik pada keluarga saya.",
          "delta": -0.2,
          "next": "d3_dinner_honest"
        },
        {
          "text": "Tak. Sejak saya kat sini, saya rasa awak je yang saya perlukan.",
          "delta": 0.3,
          "next": "d3_dinner_lie"
        }
      ]
    },
    "d3_dinner_honest": {
      "bg": "room",
      "sprite": "killer",
      "name": "Maimy",
      "text": "Keluarga? Kawan? Diorang tak pernah hargai awak macam saya hargai awak! Diorang tinggalkan awak bila awak susah! Saya je yang sanggup buat apa saja untuk awak!",
      "next": "d3_dinner_conclusion"
    },
    "d3_dinner_lie": {
      "bg": "room",
      "sprite": "blush",
      "name": "Maimy",
      "text": "Awww... manisnya mulut awak. (Maimy mengusap pipi anda). Saya janji, saya akan buat awak orang paling bahagia dalam dunia ni. Selamanya.",
      "next": "d3_dinner_conclusion"
    },
    "d3_dinner_conclusion": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "Makan malam berlangsung dalam suasana yang kekok dan menakutkan. Setiap suapan diperhatikan oleh mata Maimy yang tidak berkelip.",
      "next": "d3_night_time"
    },
    "d3_night_time": {
      "bg": "room",
      "sprite": "normal",
      "narrator": true,
      "text": "Malam semakin larut. Lampu utama dimatikan, hanya disinari lampu tidur jingga yang malap. Maimy duduk di hujung katil merenung anda yang sedang berbaring.",
      "next": "d3_sleep_question"
    },
    "d3_sleep_question": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Sayang... sebelum kita tidur. Boleh saya tanya satu benda? Awak... sayang saya tak?",
      "choices": [
        {
          "text": "Saya... perlukan masa Maimy.",
          "delta": -0.15,
          "next": "d3_sleep_hesitate"
        },
        {
          "text": "Ya, saya sayang awak Maimy.",
          "delta": 0.25,
          "next": "d3_sleep_accept"
        }
      ]
    },
    "d3_sleep_hesitate": {
      "bg": "room",
      "sprite": "angry",
      "name": "Maimy",
      "text": "Masa? Takpe, kita ada banyak MASA. Hari-hari kita akan duduk kat sini sampai perasaan tu datang. Tidurlah sayang... mimpi indah.",
      "next": "d3_end_episode"
    },
    "d3_sleep_accept": {
      "bg": "room",
      "sprite": "normal",
      "name": "Maimy",
      "text": "Saya tahu... (Maimy tersenyum bahagia). Saya akan pastikan tak ada siapa boleh pisahkan kita. Tidurlah sayangku.",
      "next": "d3_end_episode"
    },
    "d3_end_episode": {
      "bg": "room",
      "sprite": null,
      "narrator": true,
      "special": "blackout",
      "text": "[ PENGAKHIRAN EPISOD 3 ]\nSatu lagi hari berlalu dalam kurungan Maimy. Minda anda mula keliru antara realiti dan ketakutan.\nGame ini akan bersambung dalam update seterusnya.",
      "next": null
    }
  }
};
