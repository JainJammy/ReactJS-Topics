import { ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid} from "recharts";
import "../MyComponent/Linechart.css"
const pdata=[
    {
        name:'Raj',
        taskCompleted:12
    },
    {
        name:'Rohan',
        taskCompleted:11
    },
    {
        name:'Vikas',
        taskCompleted:23
    }
]    
export const line=()=>{   
   
    return(
        <>
        <h2 style={{marginLeft:"600px"}}>Line Chart</h2>
        <div>
          <h1 className="Lineset">Below Data shows how many employee has task completed in each month</h1>  
        </div>
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
  width={500}
  height={300}
  aspect={3}
  data={pdata}
  margin={{ top: 155, right: 120, left: 10, bottom: 5 }}
>
<Line dataKey="taskCompleted"/>
    <XAxis dataKey="name" />
    <YAxis/>
    <CartesianGrid stroke="#f5f5f5" />
    </LineChart>

    </ResponsiveContainer>
    </>
    )
}
export default line