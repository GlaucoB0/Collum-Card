import CardContent from "../Components/CardContent/CardContent"
import Card from "../Card/Card"
import './App.css'
import Button from "../Components/Button/Button"

const App = () => {
    return (
        <>
            <Card backgroundColor= {'#e38826'} >
                <CardContent
                    src={'icon-sedans.svg'}
                    title={'SEDANS'}
                    textContent={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'}
                />
                <Button textButton={'Learn more'} Color= {'#e38826'}/>
            </Card>
            <Card backgroundColor= {'#006970'} >
                <CardContent
                    src={'icon-suvs.svg'}
                    title={'SUVS'}
                    textContent={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'}
                />
                <Button textButton={'Learn more'} Color= {'#006970'}/>
            </Card>

            <Card backgroundColor= {'#004241'}>
                <CardContent
                    src={'icon-luxury.svg'}
                    title={'LUXURY'}
                    textContent={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'}
                />
                <Button textButton={'Learn more'} Color= {'#004241'}/>
            </Card>
        </>
    )
}
export default App