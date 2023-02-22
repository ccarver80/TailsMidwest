import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTestPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestPost = LazyLoading extends LazyLoadingDisabled ? EagerTestPost : LazyTestPost

export declare const TestPost: (new (init: ModelInit<TestPost>) => TestPost) & {
  copyOf(source: TestPost, mutator: (draft: MutableModel<TestPost>) => MutableModel<TestPost> | void): TestPost;
}