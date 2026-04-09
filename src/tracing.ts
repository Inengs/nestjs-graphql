import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';

const traceExporter = new OTLPTraceExporter({
  url: 'http://jaeger:4317',
});

const metricExporter = new PrometheusExporter({
  port: 9464,
});

const sdk = new NodeSDK({
  traceExporter,
  metricReader: metricExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
