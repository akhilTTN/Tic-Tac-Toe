/**
 * Created by akhil on 10/3/17.
 */
var chances=1;
var p1choice="";
var p2choice="";
var n1;
var n2;
var turn=0;
var r1c1;
var r1c2;
var r1c3;
var r2c1;
var r2c2;
var r2c3;
var r3c1;
var r3c2;
var r3c3;
var counts=1;
var p1scr=0;
var p2scr=0;

function start() {
    if(document.getElementById('P1').value=="" || document.getElementById('P2').value=="")
    {
        alert('Can not leave names empty');
        return;
    }
    else if(document.getElementById('p1X').checked== false && document.getElementById('p1O').checked== false){
        alert('can not start game without players choosing X or O');
        return;
    }
    else{
        var tic=document.getElementById('tab');
        var but=document.getElementById('strt');
        var scr=document.getElementById('score');
        var frm=document.getElementById('fom');
        n1=document.getElementById('P1').value;
        n2=document.getElementById('P2').value;
        tic.style.display='block';
        but.style.display='none';
        scr.style.display='block';
        frm.style.display='none';
        document.getElementById('p1info').innerHTML="<strong>Player One</strong> is <strong>"+n1+"</strong> and he will be playing as <strong>"+p1choice+"</strong>";
        document.getElementById('p2info').innerHTML="<strong>Player Two</strong> is <strong>"+n2+"</strong> and he will be playing as <strong>"+p2choice+"</strong>";
        document.getElementById('player1').innerHTML=n1;
        document.getElementById('player2').innerHTML=n2;
    }


}


function radio_logic() {
    if(document.getElementById('p1X').checked){
        document.getElementById('p1O').disabled=true;
        document.getElementById('p2X').disabled=true;
        document.getElementById('p2O').checked=true;
        p1choice="X";
        p2choice="O";
    }
    else if(document.getElementById('p1O').checked){
        document.getElementById('p1X').disabled=true;
        document.getElementById('p2O').disabled=true;
        document.getElementById('p2X').checked=true;
        p1choice="O";
        p2choice="X";
    }
    else if(document.getElementById('p2O').checked){
        document.getElementById('p1O').disabled=true;
        document.getElementById('p2X').disabled=true;
        document.getElementById('p1X').checked=true;
        p1choice="X";
        p2choice="O";
    }
    else if(document.getElementById('p2X').checked){
        document.getElementById('p1X').disabled=true;
        document.getElementById('p2X').disabled=true;
        document.getElementById('p2O').checked=true;
        p1choice="O";
        p2choice="X";
    }
}


function plays(that) {
    if(that.innerHTML==""){
        if(chances==1)
        {
            that.innerHTML=p1choice;
            chances=2;
            that.style.backgroundColor='red';
            that.style.color='white';
            document.getElementById('bodys').style.backgroundColor="#CBE32D";
            turn++;
            checks();

        }
        else if(chances==2)
        {
            that.innerHTML=p2choice;
            chances=1;
            that.style.backgroundColor='green';
            that.style.color='black';
            document.getElementById('bodys').style.backgroundColor="#F3FAB6";
            turn++;
            checks();
        }
    }
    else if(that.innerHTML=="X" || that.innerHTML=="O"){
        alert("alreay marked this tile");
    }

}
function checks() {
    var winner="Y";
    if(turn>=5 && turn < 9)
    {
        winner=wins();
        if(winner=="X")
        {
            document.getElementById('mark').style.display="block";
            if(p1choice=="X")
                document.getElementById('mark').innerHTML="Congratulations!!! "+n1+" wins";
            else if(p2choice=="X")
                document.getElementById('mark').innerHTML="Congratulations!!! "+n2+" wins";
            document.getElementById('ngm').style.display="block";
            $('#scr_tab').append("<tr><td>"+ counts+"</td><td style='color: darkblue'>Win</td><td style='color: red'>Loose</td></tr>");
            counts++;
            p1scr++;
            document.getElementById('p1scr').innerHTML=p1scr;
        }
        else if(winner=="O")
        {
            document.getElementById('ngm').style.display="block";
            document.getElementById('mark').style.display="block";
            if(p1choice=="O")
                document.getElementById('mark').innerHTML="Congratulations!!! "+n1+" wins";
            else if(p2choice=="O")
                document.getElementById('mark').innerHTML="Congratulations!!! "+n2+" wins";            // alert("Congratulations!!! "+n2+" wins");
            $('#scr_tab').append("<tr><td>"+ counts+"</td><td style='color: red'>Loose</td><td style='color: darkblue'>Win</td></tr>");
            counts++;
            p2scr++;
            document.getElementById('p2scr').innerHTML=p2scr;

        }


    }
    else if(turn ==9)
    {
        alert("This game is a Draw!!")
        document.getElementById('mark').style.display="block";
        document.getElementById('mark').innerHTML="Game was a draw";
        document.getElementById('ngm').style.display="block";
        $('#scr_tab').append("<tr><td>"+ counts+"</td><td style='color: green'>Draw</td><td style='color: green'>Draw</td></tr>");

    }
    else
        return;
}



function wins() {
    if(document.getElementById('A1').innerHTML!='X' && document.getElementById('A1').innerHTML!='O')
        r1c1="Y";
    else
        r1c1=document.getElementById('A1').innerHTML;

    if(document.getElementById('B1').innerHTML!='X' && document.getElementById('B1').innerHTML!='O')
        r1c2="Y";
    else
        r1c2=document.getElementById('B1').innerHTML;

    if(document.getElementById('C1').innerHTML!='X' && document.getElementById('C1').innerHTML!='O')
        r1c3="Y";
    else
        r1c3=document.getElementById('C1').innerHTML;

    if(document.getElementById('A2').innerHTML!='X' && document.getElementById('A2').innerHTML!='O')
        r2c1="Y";
    else
        r2c1=document.getElementById('A2').innerHTML;

    if(document.getElementById('B2').innerHTML!='X' && document.getElementById('B2').innerHTML!='O')
        r2c2="Y";
    else
        r2c2=document.getElementById('B2').innerHTML;

    if(document.getElementById('C2').innerHTML!='X' && document.getElementById('C2').innerHTML!='O')
        r2c3="Y";
    else
        r2c3=document.getElementById('C2').innerHTML;

    if(document.getElementById('A3').innerHTML!='X' && document.getElementById('A3').innerHTML!='O')
        r3c1="Y";
    else
        r3c1=document.getElementById('A3').innerHTML;

    if(document.getElementById('B3').innerHTML!='X' && document.getElementById('B3').innerHTML!='O')
        r3c2="Y";
    else
        r3c2=document.getElementById('B3').innerHTML;

    if(document.getElementById('C3').innerHTML!='X' && document.getElementById('C3').innerHTML!='O')
        r3c3="Y";
    else
        r3c3=document.getElementById('C3').innerHTML;


    var winn = "Y";
    if((r1c1==r1c2) && (r1c2 == r1c3) && r1c1!='Y')    //first row
    {
        winn=r1c1;
    }
    else if((r2c1==r2c2) && (r2c1==r2c3) && r2c1!='Y')   //second row
    {
        winn=r2c1;

    }
    else if(r3c1==r3c2 && r3c2==r3c3 && r3c1!='Y')   //third row
    {
        winn=r3c1;
    }
    else if(r1c1==r2c1 && r1c1==r3c1 && r1c1!='Y')   //column one
    {
        winn=r1c1;
    }
    else if(r1c2==r2c2 && r2c2==r3c2 && r1c2!='Y')   //column two
    {
        winn=r2c2;
    }
    else if((r1c3==r2c3) && (r2c3==r3c3) && r1c3!='Y')   //column three
    {
        winn=r1c3;
    }
    else if(r1c1==r2c2 && r1c1==r3c3 && r1c1!='Y')   //first diagonal
    {
        winn=r1c1;
    }
    else if(r1c3==r2c2 && r1c3==r3c1 && r1c3!='Y')
    {
        winn=r1c3;
    }
        return winn;
}

function new_game() {
    document.getElementById('A1').innerHTML="";
    document.getElementById('B1').innerHTML="";
    document.getElementById('C1').innerHTML="";
    document.getElementById('A2').innerHTML="";
    document.getElementById('B2').innerHTML="";
    document.getElementById('C2').innerHTML="";
    document.getElementById('A3').innerHTML="";
    document.getElementById('B3').innerHTML="";
    document.getElementById('C3').innerHTML="";
    $('#A1').css({"background-color":"black"});
    $('#A2').css({"background-color":"black"});
    $('#A3').css({"background-color":"black"});
    $('#B1').css({"background-color":"black"});
    $('#B2').css({"background-color":"black"});
    $('#B3').css({"background-color":"black"});
    $('#C1').css({"background-color":"black"});
    $('#C2').css({"background-color":"black"});
    $('#C3').css({"background-color":"black"});
    chances=1;
    turn=0;
    document.getElementById('bodys').style.backgroundColor="white";
    document.getElementById('ngm').style.display="none";
    if(document.getElementById('cb1').checked){
        var temp=p1choice;
        p1choice=p2choice;
        p2choice=temp;
    }
}


function settings() {
    document.getElementById('sett').style.display="none";
    document.getElementById('checkbox_setting').style.display="block";
}

function closed() {
    document.getElementById('sett').style.display="block";
    document.getElementById('checkbox_setting').style.display="none";
}

// function checkk() {
//     document.getElementById('a').innerHTML=r1c1;
//     document.getElementById('b').innerHTML=r1c2;
//     document.getElementById('c').innerHTML=r1c3;
//     document.getElementById('d').innerHTML=r2c1;
//     document.getElementById('e').innerHTML=r2c2;
//     document.getElementById('f').innerHTML=r2c3;
//     document.getElementById('g').innerHTML=r3c1;
//     document.getElementById('h').innerHTML=r3c2;
//     document.getElementById('i').innerHTML=r3c3;
// }