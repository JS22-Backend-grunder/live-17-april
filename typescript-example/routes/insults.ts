import { Router } from 'express';
import { Request, Response } from 'express'; // Importerar typer från express
const router = Router();

const insults = [
    {
        insult: "Never hung poison on a fouler toad",
        play: "Rickard III"
    },
    {
        insult: "He thinks too much: such men are dangerous. ",
        play: "Julius Ceasar"
    }
];

interface Insult {
    insult: string,
    play: string
}

interface Result {
    success: boolean,
    insults?: Array<Insult>,
    error?: string
}

router.get('/', (request: Request, response: Response) => {
    const result: Result = {
        success: true,
        insults: insults
    }

    response.json(result);
});

router.post('/', (request: Request, response: Response) => {
    const insultBody: Insult = request.body;

    if(insultBody?.insult && insultBody?.play) {
        const { insult, play } = insultBody;

        insults.push({ insult: insult, play: play });

        const result: Result = {
            success: true,
            insults: insults
        }

        response.json(result);
    } else {
        const result: Result = {
            success: false,
            error: 'Wrong data in body'
        }

        response.status(400).json(result);
    }

});

export default router;