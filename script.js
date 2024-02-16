let current_player = document.getElementById("current-player");

let grid_1 = document.getElementById('grid-1');
let grid_2 = document.getElementById('grid-2');
let grid_3 = document.getElementById('grid-3');
let grid_4 = document.getElementById('grid-4');
let grid_5 = document.getElementById('grid-5');
let grid_6 = document.getElementById('grid-6');
let grid_7 = document.getElementById('grid-7');
let grid_8 = document.getElementById('grid-8');
let grid_9 = document.getElementById('grid-9');

let end_message = document.getElementById('message');

let player_counter = 0;

let grid_inhabitants = [0,0,0,0,0,0,0,0,0];

let winner = 0;

let game_active = true;

let grid_available = false;

let is_tie = true;

let player1_avatar = "<img src='goose1.png'>";
let player2_avatar = "<img src='goose2.jpeg'>";

player_counter= 1;
grid_1.addEventListener('click', function(){
    if(game_active){
        update_grid_inhabitant(1);

        if(grid_available){
            grid_available = false;
            update_grid(1);
        
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }
        
        
    }
    
});
grid_2.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(2);
        
        if(grid_available){
            grid_available = false;
            
            update_grid(2);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }
        
    }
});
grid_3.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(3);
        if(grid_available){
            grid_available = false;
            update_grid(3);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }
        
    }
    
});
grid_4.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(4);
        
        if(grid_available){
            grid_available = false;
            update_grid(4);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }
        
    }
});
grid_5.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(5);
        
        if(grid_available){
            grid_available= false;
            update_grid(5);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }

    }
});
grid_6.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(6);
        
        if(grid_available){
            grid_available = false;
            
            update_grid(6);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }

        
    }
});
grid_7.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(7);
        
        if(grid_available){
            grid_available=false;
            update_grid(7);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }

        
    }
    
});
grid_8.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(8);
        
        if(grid_available){
            grid_available = false;

            update_grid(8);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }

        
    }
});
grid_9.addEventListener('click', function(){
    if(game_active){
        
        update_grid_inhabitant(9);
        if(grid_available){
            grid_available=false;
            update_grid(9);
            check_for_win();
            update_win();

            toggle_player_counter();
            update_current_player();
        }
        
    }
});

function update_grid(grid_number){
    if(grid_number == 1){
        if(player_counter == 1){
            grid_1.innerHTML = player1_avatar;
        }else{
            grid_1.innerHTML= player2_avatar;
        }

    }else if (grid_number == 2){
        if(player_counter == 1){
            grid_2.innerHTML = player1_avatar;
        }else{
            grid_2.innerHTML= player2_avatar;
        }
    }else if (grid_number == 3){
        if(player_counter == 1){
            grid_3.innerHTML = player1_avatar;
        }else{
            grid_3.innerHTML= player2_avatar;
        }
    }else if (grid_number == 4){
        if(player_counter == 1){
            grid_4.innerHTML = player1_avatar;
        }else{
            grid_4.innerHTML= player2_avatar;
        }
    }else if (grid_number == 5){
        if(player_counter == 1){
            grid_5.innerHTML = player1_avatar;
        }else{
            grid_5.innerHTML= player2_avatar;
        }
    }else if (grid_number == 6){
        if(player_counter == 1){
            grid_6.innerHTML = player1_avatar;
        }else{
            grid_6.innerHTML= player2_avatar;
        }
    }else if (grid_number == 7){
        if(player_counter == 1){
            grid_7.innerHTML = player1_avatar;
        }else{
            grid_7.innerHTML= player2_avatar;
        }
    }else if (grid_number == 8){
        if(player_counter == 1){
            grid_8.innerHTML = player1_avatar;
        }else{
            grid_8.innerHTML= player2_avatar;
        }
    }else if (grid_number == 9){
        if(player_counter == 1){
            grid_9.innerHTML = player1_avatar;
        }else{
            grid_9.innerHTML= player2_avatar;
        }
    }
}

function toggle_player_counter(){
    if(player_counter == 1){
        player_counter = 2;
    } else if (player_counter == 2){
        player_counter = 1;
    }
}

function update_grid_inhabitant(grid_number){
    if(grid_inhabitants[grid_number-1] == 0){
        grid_inhabitants[grid_number-1] = player_counter;
        grid_available =true;
    }else{
        grid_available = false;
    }
    // console.log(grid_inhabitants);

    // console.log(grid_inhabitants);
}



function update_current_player(){
    current_player.innerHTML='';

    if(player_counter == 1){
        current_player.innerHTML= "It is Player 1's turn to play!";
    }else if(player_counter == 2){
        current_player.innerHTML= "It is Player 2's turn to play!";
    }else{
        current_player.innerHTML= "Waiting for Game to Begin";
    }


}

update_current_player();


function check_for_win(){
    //check for rows
    if((grid_inhabitants[0] == grid_inhabitants[1]) && (grid_inhabitants[0] == grid_inhabitants[2]) && (grid_inhabitants[0] == 1 || grid_inhabitants[0] == 2)){
        winner = grid_inhabitants[0];
        // console.log("row 1 check");
    } else if((grid_inhabitants[3] == grid_inhabitants[4]) && (grid_inhabitants[3] == grid_inhabitants[5]) && (grid_inhabitants[3] == 1 || grid_inhabitants[3] == 2)){
        winner = grid_inhabitants[3];
        // console.log("row 2 check");
    } else if ((grid_inhabitants[6] === grid_inhabitants[7]) && (grid_inhabitants[6] === grid_inhabitants[8]) && (grid_inhabitants[6] == 1 || grid_inhabitants[6] == 2)){
        winner = grid_inhabitants[6];
        // console.log("row 3 check");
    }


    //check columns
    else if((grid_inhabitants[0] == grid_inhabitants[3]) && (grid_inhabitants[0] == grid_inhabitants[6]) && (grid_inhabitants[0] == 1 || grid_inhabitants[0] == 2)){
        winner = grid_inhabitants[0];
        // console.log("col 1 check");
    } else if((grid_inhabitants[1] === grid_inhabitants[4]) && (grid_inhabitants[1] === grid_inhabitants[7]) && (grid_inhabitants[1] == 1 || grid_inhabitants[1] == 2)){
        winner = grid_inhabitants[1];
        // console.log("col 2 check");
    } else if((grid_inhabitants[2] === grid_inhabitants[5]) && (grid_inhabitants[2] === grid_inhabitants[8]) && (grid_inhabitants[2] == 1 || grid_inhabitants[2] == 2)){
        winner = grid_inhabitants[2];
        // console.log("col 3 check");
        // console.log("column win");
    }

    //check diagonals
    else if( (grid_inhabitants[0] == grid_inhabitants[4]) && (grid_inhabitants[0] == grid_inhabitants[8]) && (grid_inhabitants[0] == 1 || grid_inhabitants[0] == 2)){
        winner = grid_inhabitants[0];
        // console.log("dia 1 check");
    } else if ( (grid_inhabitants[2] == grid_inhabitants[4]) && (grid_inhabitants[2] == grid_inhabitants[6]) && (grid_inhabitants[2] == 1 || grid_inhabitants[2] == 2)){
        winner = grid_inhabitants[2];
        // console.log("dia 2 check");
    }

    //check for tie
    is_tie = true;
    for (let i = 0; i<9; i+=1){
            if(grid_inhabitants[i] == 0){
                is_tie = false;
            }
        
    }


    console.log("winner: " + winner);
}

function update_win(){
    if (winner != 0){
        end_message.innerHTML = "WE HAVE A WINNER! OUR GOOSE CHAMPION IS PLAYER " + winner + "<br> Reload the tab to play again!"; 
        game_active = false;
        console.log("Player Counter:" + winner);
        
    } else if(is_tie){
        game_active = false;
        end_message.innerHTML = "HONK HONK, IT'S A TIE! <br> Reload the tab to play again!";
        is_tie = true;
    }

    console.log("is_tie: " + is_tie);
    console.log(grid_inhabitants);
}

// 012
// 345
// 678
