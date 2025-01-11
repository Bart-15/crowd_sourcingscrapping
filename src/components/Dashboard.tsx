import Header from './Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MyChart from './MyChart';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
function Dashboard() {
  return (
    <>
      <Header />
      <div className="mx-12 mt-8">
        <div className="mx-3 my-4 mb-8 grid grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[50px] font-bold">4.8</h1>
              <div className="flex justify-end">
                <div>
                  <Badge variant="outline" className="mb-2 rounded">
                    19.00%
                  </Badge>
                  <p className="text-[12px]">vs prev preiod</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[40px] font-bold">4.8</h1>
              <div className="flex justify-end">
                <div>
                  <Badge variant="outline" className="mb-2 rounded">
                    19.00%
                  </Badge>
                  <p className="text-[12px]">vs prev preiod</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[40px] font-bold">4.8</h1>
              <div className="flex justify-end">
                <div>
                  <Badge variant="outline" className="mb-2 rounded">
                    19.00%
                  </Badge>
                  <p className="text-[12px]">vs prev preiod</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[40px] font-bold">4.8</h1>
              <div className="flex justify-end">
                <div>
                  <Badge variant="outline" className="mb-2 rounded">
                    19.00%
                  </Badge>
                  <p className="text-[12px]">vs prev preiod</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <MyChart />
        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="text-zinc-500">Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-[20px]">Kenneth</h1>
            </div>
            <div className="bg-red mb-2 flex gap-2">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              consequuntur saepe voluptatem reprehenderit nostrum ratione.
              Beatae sunt repudiandae quod ipsum, doloremque ipsam corporis
              facilis illum minima eius cupiditate eligendi labore!
            </p>
            <div className="flex justify-end">
              <div>
                <Badge variant="outline" className="mb-2 rounded">
                  19.00%
                </Badge>
                <p className="text-[12px]">vs prev preiod</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
