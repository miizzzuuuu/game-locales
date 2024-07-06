import APIManager from '../../common/utils/APIManager';
import {
    confirmBetFullfiled,
    confirmBetPending,
    confirmBetRejected,
} from '../../store/slice/betAddSlice';
import { AppDispatch } from '../../store/store';
import { SendBetParam, SendBetResponse } from '../../types';

export const postSendBet = async (params: SendBetParam): Promise<SendBetResponse> => {
    const response = await APIManager.post<SendBetResponse>('/games/send/send', params);

    if ('status' in response.data && 'message' in response.data) {
        return response.data as SendBetResponse;
    } else {
        throw new Error("Invalid response format: 'status' or 'message' property is missing");
    }
};

export const confirmBet = async (
    dispatch: AppDispatch,
    params: SendBetParam,
    periode: number,
    balance: number,
) => {
    try {
        dispatch(confirmBetPending());

        const response = await postSendBet(params);

        if (!response.status) {
            throw new Error(response.message);
        }

        dispatch(
            confirmBetFullfiled({
                periode: periode,
                bet: params.button_bet,
                total_bet: params.total_bet,
                balance: balance,
            }),
        );
    } catch (error) {
        const message = APIManager.getErrorMessage(error);
        dispatch(confirmBetRejected(message));
    }
};
