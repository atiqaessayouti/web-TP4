function triangle1(taille){
    let i =1;
    while(i<taille){
        let ligne =""
        let j=0
        while (j<i){
            ligne +="*"
            j++
        }
        console.log(ligne);
        i++;
    }
}
triangle1(7);
