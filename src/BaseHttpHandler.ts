export interface HttpRequest {
  body: string;
}

export interface HttpResponse {
  body: string;
}

export abstract class BaseHttpHandler<Input, Output> {
  protected abstract process(input: Input): Promise<Output>;

  public async execute(request: HttpRequest) : Promise<HttpResponse> {
    const input = JSON.parse(request.body);
    const output = await this.process(input);
    return {
      body: JSON.stringify(output)
    };
  }
}