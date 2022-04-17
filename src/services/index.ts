import 'reflect-metadata';
import { ReflectiveInjector } from 'injection-js';
import { SharedService } from './shared-service';
import { UtilityService } from './utility-service';

const injectable = [
    SharedService,
    UtilityService
]

export const ServiceInjector = ReflectiveInjector.resolveAndCreate(injectable);

export * from './shared-service';
export * from './utility-service';