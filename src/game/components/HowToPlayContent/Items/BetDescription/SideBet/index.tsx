import SideBetTable from './SideBetTable';

const data: string[] = ['dragon-wild', 'tiger-wild', 'super-wild', 'dragon-pair', 'tiger-pair'];

const SideBet = () => {
    return <SideBetTable data={data} />;
};

export default SideBet;
