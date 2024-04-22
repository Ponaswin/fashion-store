import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartState {
    items: any[];
    totalAmount: number;
    totalCount: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [


        ],
        totalAmount: 0,
        totalCount: 0,
    } as CartState,
    reducers: {
        getCartTotal: (state) => {
            const { totalAmount, totalCount } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;
                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalCount += amount;
                    return cartTotal;
                },
                {
                    totalAmount: 0,
                    totalCount: 0,
                }
            );

            state.totalAmount = totalAmount;
            state.totalCount = totalCount;
        },
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].amount += 1;
            } else {
                state.items.push({ ...action.payload, amount: 1 });
            }

        },

        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        increase: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
        },

        decrease: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            }).filter((item) => item.amount !== 0);
        },
        clearCart: (state) => {
            state.items = [];
            
        },


    },
});

export const { getCartTotal, increase, remove, decrease, clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;