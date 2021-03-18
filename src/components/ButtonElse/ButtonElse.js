import React from 'react';

export function ButtonElse({handleBtnElse, isButtonActive}) {

  return (
    isButtonActive &&
    <div className="btn-else" onClick={handleBtnElse}>
      <p className="btn-else__text" >Ещё</p>         
    </div>
  )
}