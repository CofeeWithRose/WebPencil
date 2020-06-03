// declare module "worker-loader!*" {
declare module "*-worker.ts" {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    export default WebpackWorker;
  }