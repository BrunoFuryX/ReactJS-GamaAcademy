import React from 'react';

function Minicart(props: any) {

    return (
        <>
            <button>
                Carrinho
            </button>
            <div style={{'display': 'none'}}>
                <h2>
                    Carrinho
                </h2>
                <table>

                </table>
                <div>
                    <div>
                        TOTAL
                    </div>
                    <div>

                    </div>
                </div>
                <button>
                    Finalizar Compra
                </button>
            </div>
        </>
    )
}

export default Minicart;
