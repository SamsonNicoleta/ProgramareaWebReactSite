import React from "react";
import "../../../../../CoffeeShop-main/src/components/Article/Article.css";
import PropTypes from "prop-types";

const Article = ({imagePath, title}) => {
    return(
        <article className="about-coffee-article">
            <div className='img-box'>
                <img src={imagePath} alt="" />
            </div>
            <div className="about-coffee-content">
                <h2>
                    {title}
                </h2>
                <img src={"./Beans-logo-dark.svg"} alt="Logo" />
                <p>
                    Extremitatea dulceață comportament dificil el de. La eliminarea ca proprietar oribil.
                </p>
                <p>
                    Mi-e frică în lunile înalte să faci lucruri pe la. Situația recomandă obiecție face intenție
                    deci intrebari.
                    Așa cum foarte îndepărtat apelarea mulțumit îmbunătăți an. Ultimul intreaba-l simt rece
                    intalnit loc timid vrea. Copii eu râzând noi perspective răspuns răspuns urmat. La ea a mers
                    este un cântec care a ținut ajutor față.
                </p>
            </div>
        </article>
    );
};

Article.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string
};

export default Article;