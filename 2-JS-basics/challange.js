var John = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
    
        for(var i = 0; i < this.bills.length - 1; i++){
            if(this.bills[i] < 50){
                tips[i] = (20/100) * this.bills[i];
                finalValues[i] = bill[i]+tip[i];
            }
            else if(this.bills[i] >= 50 && tip[i] <= 200){
                tips[i] = (15/100) * this.bills[i];
                finalValues[i] = bill[i]+tip[i];
            }
            else{
                tips[i] = (10/100) * this.bills[i];
                finalValues[i] = bill[i]+tip[i];
            }
        }
    }
}

