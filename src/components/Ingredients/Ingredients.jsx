import React from 'react';

const Ingredients = ({meal}) => {
    let setReceipt;
    if (meal === "Ramen") {
        setReceipt = (<div>
            Для его приготовления на 4 порции понадобится:
            500 г лапши рамен
            500 г куриных косточек
            300 г куриных крылышек
            10 г соли
            100 г соевого соуса
            20 г имбиря
            10 г зелени
        </div>
        )
    } else if (meal === "French fries") {
        setReceipt =( <div>
            В картошку фри входят:
            картофель,
            масло растительное,
            декстроза,
            дифосфат натрия.
            Также картошка фри
            приправлена йодированной солью.

        </div>
        )
    } else if (meal === "Chicken") {
        setReceipt = ( <div>
            Рецепт курицы KFC
            куриное филе свежее – 1-2 штуки;
            хлопья кукурузные – 150 грамм;
            крылышки куриные – 7-9 кусочков;
            сухая панировка – 3-4 ст. л;
            яйца куриные – 2 штуки;
            мука для панировки – 150-200 грамм;
            масло растительное – 1 литр;
            соль, специи – по вкусу.
        </div>
        )
    }

    return (
        <div>
           {setReceipt} 
        </div>
    );
};

export default Ingredients;