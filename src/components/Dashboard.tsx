import Header from './Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MyChart from './MyChart';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ArrowUp } from 'lucide-react';
function Dashboard() {
  return (
    <>
      <Header />
      <div className="mx-12 mt-8">
        <div className="my-4 mb-8 grid grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[50px] font-bold">4.8</h1>
              <div className="flex justify-end">
                <div>
                  <Badge
                    variant="outline"
                    className="mb-1 rounded-xl bg-green-500 text-white"
                  >
                    <span>
                      <ArrowUp className="mr-1 w-[14px]" />
                    </span>
                    19.90%
                  </Badge>
                  <p className="text-[12px]">vs prev preiod</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">Total Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[45px] font-bold">210</h1>
              <div className="flex justify-end">
                <div className="flex justify-end">
                  <Badge
                    variant="outline"
                    className="mb-1 rounded-xl bg-green-500 text-white"
                  >
                    <span>
                      <ArrowUp className="mr-1 w-[14px]" />
                    </span>
                    97%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">Top Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[45px] font-bold">210</h1>
              <div className="flex justify-end">
                <div className="flex justify-end">
                  <Badge
                    variant="outline"
                    className="mb-1 rounded-xl bg-green-500 text-white"
                  >
                    <span>
                      <ArrowUp className="mr-1 w-[14px]" />
                    </span>
                    97%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">Review Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="text-[45px] font-bold">210</h1>
              <div className="flex justify-end">
                <div className="flex justify-end">
                  <Badge
                    variant="outline"
                    className="mb-1 rounded-xl bg-green-500 text-white"
                  >
                    <span>
                      <ArrowUp className="mr-1 w-[14px]" />
                    </span>
                    97%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <MyChart />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-zinc-500">
                Customer Satisfactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="text-[18px]">Kenneth</h1>
                </div>
                <div className="bg-red mb-2 flex gap-1">
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                </div>
                <p className="text-[14px] text-gray-500">
                  I’ve been using Globe Telecom for some time now, and I have to
                  say, I'm really impressed with their service improvements!
                  It’s great to see that they've started increasing the Mbps,
                  which is definitely a step in the right direction.
                </p>
              </div>
              <div className="mt-5">
                <div className="mb-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="text-[18px]">Kenneth</h1>
                </div>
                <div className="bg-red mb-2 flex gap-1">
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                  <Star className="text-yellow-400" size={14} />
                </div>
                <p className="text-[14px] text-gray-500">
                  I’ve been using Globe Telecom for some time now, and I have to
                  say, I'm really impressed with their service improvements!
                  It’s great to see that they've started increasing the Mbps,
                  which is definitely a step in the right direction.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
