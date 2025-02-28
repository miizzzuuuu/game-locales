import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../HowToPlayCardV2';
import TotalBet from './TotalBet';
import Username from './Username';
import ChipHorizontal from './SVG/ChipHorizontal';
import Timer from './Timer';
import LimitBet from './LimitBet';

const keyLang = 'htp.general';

const General = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <div className="htp__container">
                <div className="htp__section">
                    <Username />
                    <p className="htp__text">
                        Untuk ikut serta dalam permainan, Anda harus memiliki saldo/dana yang
                        mencukupi untuk menutupi taruhan Anda. Saldo Anda saat ini dapat dilihat di
                        bagian kiri bawah layar anda.
                    </p>
                </div>

                <div className="htp__section">
                    <TotalBet />
                    <p className="htp__text">
                        Indikator TOTAL TARUHAN Menampilkan total jumlah taruhan yang Anda pasang
                        untuk babak saat ini.
                    </p>
                </div>

                <div className="htp__section">
                    <LimitBet />
                    <p className="htp__text">
                        Menampilkan taruhan minimum dan maksimum yang diperbolehkan di atas meja dan
                        dapat berubah kapan saja. Selain itu terdapat kode unik periode saat ini dan
                        nama game yang sedang anda mainkan.
                    </p>
                </div>

                <div className="htp__section">
                    <Timer />
                    <p className="htp__text">
                        Menampilkan taruhan minimum dan maksimum yang diperbolehkan di atas meja dan
                        dapat berubah kapan saja. Selain itu terdapat kode unik periode saat ini dan
                        nama game yang sedang anda mainkan.
                    </p>
                </div>

                <div className="htp__section">
                    <ChipHorizontal />
                    <p className="htp__text">
                        Menampilkan taruhan minimum dan maksimum yang diperbolehkan di atas meja dan
                        dapat berubah kapan saja. Selain itu terdapat kode unik periode saat ini dan
                        nama game yang sedang anda mainkan.
                    </p>
                </div>
            </div>
        </HowToPlayCardV2>
    );
};

export default General;
