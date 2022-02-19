import { Router } from 'express'
import { Quote } from '../models/quote'
import { schema } from '@starter/common/schema'
import { getManager } from "typeorm";

const router = Router()

// qoutes
router.get('/', async (req, res, next) => {
  const quotes = await Quote.find();
  res.status(200).send(`
    <pre>
      ${JSON.stringify(quotes, null, 2)}
    </pre>
  `)
})

router.post('/', async (req, res, next) => {
  try {
    // validate
    await schema.validate(req.body)

    // save
    const converted = {
      ...req.body,
      timeInCurrentEmploymentYear: req.body.timeInCurrentEmployment.year,
      timeInCurrentEmploymentMonth: req.body.timeInCurrentEmployment.month,
    }
    delete converted.timeInCurrentEmployment
    const manager = getManager();
    const newQuote = manager.create(Quote, converted);
    await newQuote.save();

    res.status(201).json({ success: true })
  } catch (e) {
    if (e.name === 'ValidationError') {
      // nothing
    }
    res.status(400).json({
      success: false,
      ...e
    })
  }
})

export default router
