import express from "express"
import { createRecord, Record, recordDelete, records, recordUpdate ,getBarChartData,getBalance} from '../controller/Records.js'


const record = express.Router()

record.get('/', records).get('/:id', Record).post('/create',createRecord).put('/:id',recordUpdate).delete('/:id',recordDelete).get('/:id/barchart',getBarChartData).get('/:id/getbalance',getBalance)

export {record}