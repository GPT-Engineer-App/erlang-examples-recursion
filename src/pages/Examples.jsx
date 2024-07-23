import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Examples = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Erlang Examples</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recursion in Erlang</CardTitle>
          <CardDescription>A simple example of recursion in Erlang</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="language-erlang">
{`-module(factorial).
-export([factorial/1]).

factorial(0) -> 1;
factorial(N) when N > 0 -> N * factorial(N-1).`}
            </code>
          </pre>
          <p className="mt-4">
            This example demonstrates a recursive function to calculate the factorial of a number.
            The base case is when N is 0, which returns 1. For any positive integer N, it recursively
            calls itself with N-1 and multiplies the result by N.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Process Message Passing in Erlang</CardTitle>
          <CardDescription>An example of process creation and message passing</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code className="language-erlang">
{`-module(ping_pong).
-export([start/0, ping/2, pong/0]).

ping(0, Pong_PID) ->
    Pong_PID ! finished,
    io:format("ping finished~n", []);

ping(N, Pong_PID) ->
    Pong_PID ! {ping, self()},
    receive
        pong ->
            io:format("Ping received pong~n", [])
    end,
    ping(N - 1, Pong_PID).

pong() ->
    receive
        finished ->
            io:format("Pong finished~n", []);
        {ping, Ping_PID} ->
            io:format("Pong received ping~n", []),
            Ping_PID ! pong,
            pong()
    end.

start() ->
    Pong_PID = spawn(fun() -> pong() end),
    spawn(fun() -> ping(3, Pong_PID) end).`}
            </code>
          </pre>
          <p className="mt-4">
            This example shows how to create processes and pass messages between them.
            It creates a "ping" process that sends messages to a "pong" process.
            The processes communicate by sending and receiving messages, demonstrating
            Erlang's concurrency model.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Examples;