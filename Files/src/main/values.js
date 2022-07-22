//uses a beta distribution
function rngBetaDistr(){
    var unif = Math.random();//uniform distribution
            var beta = Math.pow(Math.sin(unif * Math.PI / 2),2);
            beta_left = (beta < 0.5) ? 2 * beta : 2 * (1 - beta);//skewing beta towards leftside
            //console.log(beta_left);
}