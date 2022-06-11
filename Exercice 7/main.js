// Déclration des cases div
case1 = document.querySelector('.case1')
case2 = document.querySelector('.case2')
case3 = document.querySelector('.case3')
case4 = document.querySelector('.case4')
case5 = document.querySelector('.case5')
case6 = document.querySelector('.case6')
case7 = document.querySelector('.case7')
case8 = document.querySelector('.case8')
case9 = document.querySelector('.case9')
case10 = document.querySelector('.case10')
case11 = document.querySelector('.case11')
case12 = document.querySelector('.case12')
case13 = document.querySelector('.case13')
case14 = document.querySelector('.case14')
case15 = document.querySelector('.case15')
case16 = document.querySelector('.case16')
case17 = document.querySelector('.case17')
case18 = document.querySelector('.case18')
case19 = document.querySelector('.case19')
case20 = document.querySelector('.case20')
case21 = document.querySelector('.case21')
case22 = document.querySelector('.case22')
case23 = document.querySelector('.case23')
case24 = document.querySelector('.case24')
case25 = document.querySelector('.case25')
case26 = document.querySelector('.case26')
case27 = document.querySelector('.case27')
case28 = document.querySelector('.case28')
case29 = document.querySelector('.case29')
case30 = document.querySelector('.case30')
case31 = document.querySelector('.case31')
case32 = document.querySelector('.case32')
case33 = document.querySelector('.case33')
case34 = document.querySelector('.case34')
case35 = document.querySelector('.case35')
case36 = document.querySelector('.case36')
case37 = document.querySelector('.case37')
case38 = document.querySelector('.case38')
case39 = document.querySelector('.case39')
case40 = document.querySelector('.case40')
case41 = document.querySelector('.case41')
case42 = document.querySelector('.case42')
case43 = document.querySelector('.case43')
case44 = document.querySelector('.case44')
case45 = document.querySelector('.case45')
case46 = document.querySelector('.case46')
case47 = document.querySelector('.case47')
case48 = document.querySelector('.case48')
case49 = document.querySelector('.case49')
case50 = document.querySelector('.case50')
case51 = document.querySelector('.case51')
case52 = document.querySelector('.case52')
case53 = document.querySelector('.case53')
case54 = document.querySelector('.case54')
case55 = document.querySelector('.case55')
case56 = document.querySelector('.case56')
case57 = document.querySelector('.case57')
case58 = document.querySelector('.case58')
case59 = document.querySelector('.case59')
case60 = document.querySelector('.case60')
case61 = document.querySelector('.case61')
case62 = document.querySelector('.case62')
case63= document.querySelector('.case63')
case64 = document.querySelector('.case64')
rules = document.querySelector('.rules')

// Index de victoire
let x = 0;

// Renvoie un nombre aléatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Reset des damiers
function init(mode) {
    let Case = [case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25,case26,case27,case28,case29,case30,case31,case32,case34,case35,case36,case37,case38,case39,case40,case41,case42,case43,case44,case45,case46,case47,case48,case49,case50,case51,case52,case53,case54,case55,case56,case57,case58,case59,case60,case61,case62,case63,case64];
    if (mode == "facile") {
        for (let i = 0; i < 24; i++ ) {
            Case[i].style.backgroundColor = 'yellow';
        }
    } else if (mode == "moyen") {
        for (let i = 0; i < 35; i++ ) {
            Case[i].style.backgroundColor = 'yellow';
        }
    } else if (mode == "difficile") {
        for (let i = 0; i < 63; i++ ) {
            Case[i].style.backgroundColor = 'yellow';
        }
    }
}


function def_bar(Case_liste,mode) {
    let Case = [];
    if (mode == "facile") {
         Case = [case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25];
    } else if (mode == "moyen") {
         Case = [case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25,case26,case27,case28,case29,case30,case31,case32,case34,case35,case36];
    } else if (mode == "moyen") {
         Case = [case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25,case26,case27,case28,case29,case30,case31,case32,case34,case35,case36,case37,case38,case39,case40,case41,case42,case43,case44,case45,case46,case47,case48,case49,case50,case51,case52,case53,case54,case55,case56,case57,case58,case59,case60,case61,case62,case63,case64];
    }
    for (let i = 0; i < Case.length; i++) {
        for (let y = 0; y < Case_liste.length; y++) {
            if (Case[i]==Case_liste[y]) {
                Case.splice(i, 1)
            }
        }
    }
    return Case
}

// Met en place le tracé tutoriel
function tutoriel() {
    rules.innerHTML = "Les règles sont simple : on ne doit survoler que les touches oranges et finir le tracé";
    case1.style.backgroundColor = 'orange';
    case2.style.backgroundColor = 'orange';
    case7.style.backgroundColor = 'orange';
    case8.style.backgroundColor = 'orange';
    case13.style.backgroundColor = 'orange';
    case14.style.backgroundColor = 'orange';
    case19.style.backgroundColor = 'orange';
}
// Met en place les liste associées au tutoriel
let Case = [case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12,case13,case14,case15,case16,case17,case18,case19,case20,case21,case22,case23,case24,case25];
let Case_tuto = [case1,case2,case7,case8,case13,case14,case19,case24,case25];
let Case_tuto_bar = def_bar(Case_tuto,"facile");
// Met en place les tracés facile
function facile(number) {
    if (number == 0) {
        case8.style.backgroundColor = 'orange';
        case9.style.backgroundColor = 'orange';
        case12.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
    } else if (number == 1) {
        case3.style.backgroundColor = 'orange';
        case4.style.backgroundColor = 'orange';
        case5.style.backgroundColor = 'orange';
        case7.style.backgroundColor = 'orange';
        case8.style.backgroundColor = 'orange';
        case12.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
    } else if (number == 2) {
        case6.style.backgroundColor = 'orange';
        case7.style.backgroundColor = 'orange';
        case8.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case19.style.backgroundColor = 'orange';
    } else if (number == 3) {
        case3.style.backgroundColor = 'orange';
        case4.style.backgroundColor = 'orange';
        case9.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
    } else if (number == 4) {
        case9.style.backgroundColor = 'orange';
        case12.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
    }
}
// Met en place les liste associées au tutoriel
let Case_Simple1 = [case8,case9,case12,case13,case17,case18,case23];
let Case_Simple2 = [case3,case4,case5,case7,case8,case12,case13,case14,case15,case18,case19,case20,case25];
let Case_Simple3 = [case6,case7,case8,case13,case14,case18,case19];
let Case_Simple4 = [case3,case4,case9,case13,case14,case17,case18];
let Case_Simple5 = [case9,case12,case13,case14,case17,case21,case22];
let array_simple = [Case_Simple1,Case_Simple2,Case_Simple3,Case_Simple4,Case_Simple5];


// Met en place les tracés moyens
function moyen(number) {
    if (number == 0) {
        case9.style.backgroundColor = 'orange';
        case10.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case16.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
    } else if (number == 1) {
        case3.style.backgroundColor = 'orange';
        case4.style.backgroundColor = 'orange';
        case5.style.backgroundColor = 'orange';
        case9.style.backgroundColor = 'orange';
        case10.style.backgroundColor = 'orange';
        case11.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case16.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
    } else if (number == 2) {
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
        case26.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
        case29.style.backgroundColor = 'orange';
        case31.style.backgroundColor = 'orange';
        case32.style.backgroundColor = 'orange';
        case33.style.backgroundColor = 'orange';
        case34.style.backgroundColor = 'orange';
    } else if (number == 3) {
        case9.style.backgroundColor = 'orange';
        case10.style.backgroundColor = 'orange';
        case11.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case16.style.backgroundColor = 'orange';
        case17.style.backgroundColor = 'orange';
        case19.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
    } else if (number == 4) {
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case16.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case25.style.backgroundColor = 'orange';
        case26.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
    }
}

// Met en place les liste associées au tutoriel
let Case_Moyen1 = [case9,case10,case15,case16,case17,case18,case21,case22,case23,case27,case28];
let Case_Moyen2 = [case3,case4,case5,case9,case10,case11,case14,case15,case16,case17,case21,case22];
let Case_Moyen3 = [case21,case22,case23,case26,case27,case28,case29,case31,case32,case33,case34];
let Case_Moyen4 = [case9,case10,case11,case14,case15,case16,case17,case19,case20,case21,case22];
let Case_Moyen5 = [case13,case14,case15,case16,case20,case21,case22,case25,case26,case27,case28];
let array_moyen = [Case_Moyen1,Case_Moyen2,Case_Moyen3,Case_Moyen4,Case_Moyen5];


// Met en place les tracés difficiles
function difficile(number) {
    if (number == 0) {
        case25.style.backgroundColor = 'orange';
        case26.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
        case29.style.backgroundColor = 'orange';
        case30.style.backgroundColor = 'orange';
        case35.style.backgroundColor = 'orange';
        case36.style.backgroundColor = 'orange';
        case38.style.backgroundColor = 'orange';
        case44.style.backgroundColor = 'orange';
        case45.style.backgroundColor = 'orange';
        case46.style.backgroundColor = 'orange';
        case52.style.backgroundColor = 'orange';
        case53.style.backgroundColor = 'orange';
        case61.style.backgroundColor = 'orange';
    } else if (number == 1) {
        case5.style.backgroundColor = 'orange';
        case6.style.backgroundColor = 'orange';
        case7.style.backgroundColor = 'orange';
        case10.style.backgroundColor = 'orange';
        case11.style.backgroundColor = 'orange';
        case12.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case19.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case30.style.backgroundColor = 'orange';
        case34.style.backgroundColor = 'orange';
        case35.style.backgroundColor = 'orange';
        case36.style.backgroundColor = 'orange';
        case37.style.backgroundColor = 'orange';
        case38.style.backgroundColor = 'orange';
        case42.style.backgroundColor = 'orange';
        case44.style.backgroundColor = 'orange';
        case45.style.backgroundColor = 'orange';
        case50.style.backgroundColor = 'orange';
        case51.style.backgroundColor = 'orange';
        case52.style.backgroundColor = 'orange';
        case53.style.backgroundColor = 'orange';
    } else if (number == 2) {
        case12.style.backgroundColor = 'orange';
        case13.style.backgroundColor = 'orange';
        case14.style.backgroundColor = 'orange';
        case15.style.backgroundColor = 'orange';
        case16.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case24.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
        case32.style.backgroundColor = 'orange';
        case35.style.backgroundColor = 'orange';
        case36.style.backgroundColor = 'orange';
        case37.style.backgroundColor = 'orange';
        case40.style.backgroundColor = 'orange';
        case43.style.backgroundColor = 'orange';
        case44.style.backgroundColor = 'orange';
        case45.style.backgroundColor = 'orange';
        case46.style.backgroundColor = 'orange';
        case47.style.backgroundColor = 'orange';
        case48.style.backgroundColor = 'orange';
        case50.style.backgroundColor = 'orange';
        case51.style.backgroundColor = 'orange';
        case52.style.backgroundColor = 'orange';
        case53.style.backgroundColor = 'orange';
        case57.style.backgroundColor = 'orange';
        case58.style.backgroundColor = 'orange';
    } else if (number == 3) {
        case17.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
        case25.style.backgroundColor = 'orange';
        case26.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
        case29.style.backgroundColor = 'orange';
        case30.style.backgroundColor = 'orange';
        case31.style.backgroundColor = 'orange';
        case35.style.backgroundColor = 'orange';
        case36.style.backgroundColor = 'orange';
        case37.style.backgroundColor = 'orange';
        case39.style.backgroundColor = 'orange';
        case45.style.backgroundColor = 'orange';
        case46.style.backgroundColor = 'orange';
        case47.style.backgroundColor = 'orange';
    } else if (number == 4) {
        case17.style.backgroundColor = 'orange';
        case18.style.backgroundColor = 'orange';
        case20.style.backgroundColor = 'orange';
        case21.style.backgroundColor = 'orange';
        case22.style.backgroundColor = 'orange';
        case23.style.backgroundColor = 'orange';
        case25.style.backgroundColor = 'orange';
        case26.style.backgroundColor = 'orange';
        case27.style.backgroundColor = 'orange';
        case28.style.backgroundColor = 'orange';
        case29.style.backgroundColor = 'orange';
        case30.style.backgroundColor = 'orange';
        case31.style.backgroundColor = 'orange';
        case35.style.backgroundColor = 'orange';
        case36.style.backgroundColor = 'orange';
        case37.style.backgroundColor = 'orange';
        case39.style.backgroundColor = 'orange';
        case45.style.backgroundColor = 'orange';
        case46.style.backgroundColor = 'orange';
        case47.style.backgroundColor = 'orange';
    }
}

// Met en place les liste associées au tutoriel
let Case_Difficile1 = [case25,case26,case27,case28,case29,case30,case35,case36,case38,case44,case45,case46,case52,case53,case61];
let Case_Difficile2 = [case5,case6,case7,case10,case11,case12,case13,case15,case18,case19,case20,case21,case22,case23,case27,case30,case34,case35,case36,case37,case38,case42,case44,case45,case50,case51,case52,case53];
let Case_Difficile3 = [case12,case13,case14,case15,case16,case20,case24,case27,case28,case32,case35,case36,case37,case40,case43,case44,case34,case35,case36,case37,case38,case43,case44,case45,case46,case47,case48,case50,case51,case52,case53,case57,case58];
let Case_Difficile4 = [case17,case18,case20,case21,case22,case23,case25,case26,case27,case28,case29,case30,case31,case35,case36,case37,case39,case45,case46,case47];
let Case_Difficile5 = [case7,case10,case11,case12,case15,case18,case20,case21,case22,case23,case26,case27,case28,case29,case30,case34,case35,case36,case37,case38,case42,case44,case45,case50,case51,case52,case53];
let array_difficile = [Case_Difficile1,Case_Difficile2,Case_Difficile3,Case_Difficile4,Case_Difficile5];

// Met en place le tracé win
function win(liste) {
    rules.innerHTML = "YOU WIN"; 
    for (let i = 0; i < liste.length; i++) {
        liste[i].style.backgroundColor = 'blue';   
    }
}


// Condition lorsqu'on survole une case 
function Case_cond(Case_mode,number) {
    Case_mode[number].addEventListener('mouseover',
    ()=>{
        if (Case_mode[number].style.backgroundColor != 'orange') {
            location.reload()
        }
    })

}

// Choix des différents niveaux
function play(mode) {
    if (mode=="tutoriel") {
        tutoriel()
        // Condition lorsqu'on survole une case  sorti de la fonction de base
        for (let i = 0; i < Case_tuto.length; i++) {
            Case_cond(Case_tuto,i)
            Case_tuto[i].addEventListener('mouseover',
            ()=>{
                if (Case_tuto[i].style.backgroundColor == 'orange') {
                    Case_tuto[i].style.backgroundColor = 'black';
                    x = x + 1
                    if (x == 7) {
                        x = 0
                        win(Case_tuto)
    
                    }
                }
            })
        }
        for (let i = 0; i < Case_tuto_bar.length; i++) {
            Case_cond(Case_tuto_bar,i)
        }
    } else if (mode=="facile") {
        init("facile")
        let random = getRandomInt(4);
        let Easy_case = array_simple[random];
        let Easy_case_bar = def_bar(Easy_case,"facile");
        rules.innerHTML = "Mode Facile";
        facile(random)
        for (let i = 0; i < Easy_case.length; i++) {
            Case_cond(Easy_case,i)
            Easy_case[i].addEventListener('mouseover',
            ()=>{
                if (Easy_case[i].style.backgroundColor == 'orange') {
                    Easy_case[i].style.backgroundColor = 'black';
                    x = x + 1
                    if (x == Easy_case.length) {
                        x = 0
                        win(Easy_case)

                    }
                }
            })
        }
        for (let i = 0; i < Easy_case_bar.length; i++) {
            Case_cond(Easy_case_bar,i)
        }
    } else if (mode=="moyen") {
        init("moyen")
        let random = getRandomInt(4);
        let Medium_case = array_moyen[random];
        let Medium_case_bar = def_bar(Medium_case,"moyen");
        rules.innerHTML = "Mode Moyen";
        moyen(random)
        for (let i = 0; i < Medium_case.length; i++) {
            Case_cond(Medium_case,i)
            Medium_case[i].addEventListener('mouseover',
            ()=>{
                if (Medium_case[i].style.backgroundColor == 'orange') {
                    Medium_case[i].style.backgroundColor = 'black';
                    x = x + 1
                    if (x == Medium_case.length) {
                        x = 0
                        win(Medium_case)

                    }
                }
            })
        }
        for (let i = 0; i < Medium_case_bar.length; i++) {
            Case_cond(Medium_case_bar,i)
        }
    } else if (mode=="difficile") {
        init("difficile")
        let random = getRandomInt(4);
        let Hard_case = array_difficile[random];
        let Hard_case_bar = def_bar(Hard_case,"difficile");
        rules.innerHTML = "Mode Difficile";
        difficile(random)
        for (let i = 0; i < Hard_case.length; i++) {
            Case_cond(Hard_case,i)
            Hard_case[i].addEventListener('mouseover',
            ()=>{
                if (Hard_case[i].style.backgroundColor == 'orange') {
                    Hard_case[i].style.backgroundColor = 'black';
                    x = x + 1
                    if (x == Hard_case.length) {
                        x = 0
                        win(Hard_case)
                    }
                }
            })
        }
        for (let i = 0; i < Hard_case_bar.length; i++) {
            Case_cond(Hard_case_bar,i)
        }
    }
}

