import express from 'express'
import { connectDB } from './utils/connect'

const app = express()
void connectDB(app)
