import React from "react";

export const Success = ({count}) => {
    return(
        <>
            <div className="success">
                <p>Всем {count} пользователям отправлено приглашение</p>
                <button onClick={() => window.location.reload()}>Назад</button>
            </div>
        </>
    )
}