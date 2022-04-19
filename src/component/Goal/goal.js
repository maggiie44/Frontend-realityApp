
import './goal.css'

function Goal(props) {

    return (
        <div className='BoxDownGoal'>
            <div className='top-plus'>
                <div className='data-result-goal'>
                    DISTANCE GOAL
                    <br/>
                    {props.goal} min
                </div>

                <div className='data-result-goal'>
                    CURRENT TOTAL
                    <br/>
                    0 min
                </div>
            
                <div className='data-result-goal'>
                    CALORIES GOAL
                    <br/>
                    {props.calGoal} cals
                </div>

                <div className='data-result-goal'>
                    CURRENT TOTAL
                    <br/>
                    0 cals
                </div>
            </div>
        </div>
    )
}

export default Goal