import React from 'react';
import Header from './Header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function Dashboard() {
  return (
    <>
      <Header />
      <div className="mx-3 my-4 grid grid-cols-4 gap-4">
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
    </>
  );
}

export default Dashboard;
