import { useState } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion'
import './card.css';
import { Card, Button } from 'react-bootstrap';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ShareIcon from '@material-ui/icons/Share';
function CardData({ value }) {
    const [open, setOpen] = useState(false)
    return <AnimateSharedLayout>
        {open ?
            <Card className="m-5">

                < motion.div
                    className='expanded-card'
                    layoutId="expandable-card"
                    style={{ background: value }}>



                    <Card.Header style={{ textAlign: "left" }}>{value.name}</Card.Header>
                    <Card.Body>
                        {
                            value.content.split('\n').map((i, index) => {
                                return <p style={{ textAlign: "left", marginBottom: "0px", fontSize: "18px" }}>{index + 1}. {i}</p>
                            })
                        }

                    </Card.Body>
                    <Card.Footer style={{ textAlign: "right" }}>
                        <Button variant="outline-dark" onClick={() => setOpen(false)} ><FullscreenExitIcon /></Button>
                        <Button className="mx-2" variant="outline-dark"  ><ShareIcon /></Button>
                    </Card.Footer>

                </motion.div>

            </Card>
            :


            <Card className="m-3" style={{ width: '55%' }}>

                <motion.div
                    layoutId="expandable-card"
                    style={{ background: value }}>

                    <Card.Header style={{ textAlign: "left" }}>{value.name}</Card.Header>
                    <Card.Body>
                        {
                            value.content.split('\n').map((i, index) => {
                                return <p style={{ textAlign: "left", marginBottom: "0px", fontSize: "13px" }}>{index + 1}. {i}</p>
                            })
                        }

                    </Card.Body>
                    <Card.Footer style={{ textAlign: "right" }}>
                        <Button variant="outline-dark" onClick={() => setOpen(true)} ><FullscreenIcon /></Button>
                        <Button className="mx-2" variant="outline-dark"  ><ShareIcon /></Button>
                    </Card.Footer>
                </motion.div>

            </Card>
        }
    </AnimateSharedLayout >
}


export default CardData;