import _ from 'lodash';
const mockData = [
    { balance: 10000, userId: "user-3" },
    { balance: 20000, userId: "user-2" },
    { balance: 30000, userId: "user-1" },
    { balance: 40000, userId: "user-3" },
    { balance: 50000, userId: "user-2" },
    { balance: 60000, userId: "user-1" },
];
const groupedByUser = _.groupBy(mockData, 'userId');
const averageBalances = _.reduce(groupedByUser, (result, records, userId) => {
    const totalBalance = _.sumBy(records, 'balance');
    const averageBalance = totalBalance / records.length;
    result[userId] = averageBalance;
    return result;
}, {});

console.log(averageBalances);
