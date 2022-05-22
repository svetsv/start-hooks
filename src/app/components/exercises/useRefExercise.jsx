import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const contentRef = useRef("Блок");

    const handleClick = () => {
        contentRef.current.style.height =
            contentRef.current.style.height === "40px" ? "150px" : "40px";
        contentRef.current.style.width =
            contentRef.current.style.width === "80px" ? "60px" : "80px";
        contentRef.current.textContent =
            contentRef.current.textContent === "Блок" ? "text" : "Блок";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={contentRef}
            >
                <small>{contentRef.current}</small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Change
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
