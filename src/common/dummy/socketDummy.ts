import { Broadcast } from '../../types';

export const broadcast1: Broadcast = {
    name: 'broadcast',
    data: {
        message_type: 'STOP GAME - fix lamp',
        message_data: [
            {
                language: 'en',
                title: 'Stop Game',
                message: 'Stop game due to fix lamp auto off',
            },
            {
                language: 'ko',
                title: '게임 중지',
                message: '램프 자동 꺼짐으로 인해 게임 중지',
            },
            {
                language: 'th',
                title: 'หยุดเกม',
                message: 'หยุดเกมเนื่องจากโคมไฟปิดอัตโนมัติ',
            },
            {
                language: 'vn',
                title: 'Dừng trò chơi',
                message: 'dừng game do đèn tự động tắt',
            },
            {
                language: 'zh',
                title: '停止游戏',
                message: '由于灯自动关闭而停止游戏',
            },
            {
                language: 'tu',
                title: 'Oyunu durdur',
                message: 'lambanın otomatik kapanması nedeniyle oyunu durdur',
            },
            {
                language: 'hi',
                title: 'खेल रद्द',
                message: 'लैम्प स्वतः बंद होने के कारण खेल रोकें',
            },
        ],
        show_once: false,
        status: true,
    },
};
