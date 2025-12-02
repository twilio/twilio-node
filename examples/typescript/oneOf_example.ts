/**
 * OneOf TypeScript Example - Demonstrating oneOf functionality with type safety
 *
 * This example demonstrates how to work with oneOf schemas in the Twilio SDK
 * using TypeScript for enhanced type safety.
 *
 * The Pet API accepts a Cat object that uses oneOf to support two different
 * variants:
 *
 * Variant One: accountSid + param1 + param2 + dog
 * Variant Two: accountSid + object1 + object2
 */

import twilio from "../../lib";
import { Cat, Dog } from "../../lib/rest/oneOf/v1/pet";

const accountSid: string = process.env.TWILIO_ACCOUNT_SID || "";
const token: string = process.env.TWILIO_AUTH_TOKEN || "";

const client = twilio(accountSid, token);

// Example 1: Creating a pet with Variant One (param1, param2, dog)
// TypeScript ensures type safety for all fields
console.log("\n=== Example 1: Creating Pet with Variant One (TypeScript) ===");

const dogData: Dog = {
  type: "dog",
  name: "Buddy",
  packSize: 5
};

const petVariantOne: Cat = {
  accountSid: "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  param1: "value1",
  param2: "value2",
  dog: dogData
};

client.oneOf.v1.pets.create(petVariantOne)
  .then((pet) => {
    console.log("Created pet with Variant One:");
    console.log("  Account SID:", pet.accountSid);
    console.log("  Param1:", pet.param1);
    console.log("  Param2:", pet.param2);
    if (pet.dog) {
      console.log("  Dog name:", pet.dog.name);
      console.log("  Pack size:", pet.dog.packSize);
    }
  })
  .catch((error: Error) => {
    console.error("Error creating pet with Variant One:", error.message);
  });


// Example 2: Creating a pet with Variant Two (object1, object2)
// TypeScript provides autocomplete and validation for variant fields
console.log("\n=== Example 2: Creating Pet with Variant Two (TypeScript) ===");

const petVariantTwo: Cat = {
  accountSid: "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  object1: "firstObject",
  object2: "secondObject"
};

client.oneOf.v1.pets.create(petVariantTwo)
  .then((pet) => {
    console.log("Created pet with Variant Two:");
    console.log("  Account SID:", pet.accountSid);
    console.log("  Object1:", pet.object1);
    console.log("  Object2:", pet.object2);
  })
  .catch((error: Error) => {
    console.error("Error creating pet with Variant Two:", error.message);
  });


// Example 3: Type-safe callbacks
console.log("\n=== Example 3: Type-Safe Callbacks ===");

const petWithCallback: Cat = {
  accountSid: "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  param1: "callbackValue1",
  param2: "callbackValue2",
  dog: {
    type: "dog",
    name: "Rex",
    packSize: 3
  }
};

client.oneOf.v1.pets.create(petWithCallback, {}, (err: Error | null, pet?: any) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  if (pet) {
    console.log("Created pet using callback:");
    console.log("  Account SID:", pet.accountSid);
    if (pet.dog) {
      console.log("  Dog name:", pet.dog.name);
    }
  }
});


// Example 4: Type Guards for discriminating variants
// Use type guards to safely determine which variant you're working with
console.log("\n=== Example 4: Using Type Guards ===");

function isVariantOne(cat: Cat): boolean {
  return cat.param1 !== undefined && cat.param2 !== undefined;
}

function isVariantTwo(cat: Cat): boolean {
  return cat.object1 !== undefined && cat.object2 !== undefined;
}

function processPet(pet: Cat): void {
  console.log("Processing pet with Account SID:", pet.accountSid);

  if (isVariantOne(pet)) {
    console.log("  This is Variant One");
    console.log("  Param1:", pet.param1);
    console.log("  Param2:", pet.param2);
    if (pet.dog) {
      console.log("  Dog:", pet.dog.name);
    }
  } else if (isVariantTwo(pet)) {
    console.log("  This is Variant Two");
    console.log("  Object1:", pet.object1);
    console.log("  Object2:", pet.object2);
  }
}

// Test type guards
processPet(petVariantOne);
processPet(petVariantTwo);


// Example 5: Async/Await Pattern
console.log("\n=== Example 5: Async/Await Pattern ===");

async function createPetAsync(): Promise<void> {
  try {
    const pet: Cat = {
      accountSid: "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      param1: "asyncValue1",
      param2: "asyncValue2",
      dog: {
        type: "dog",
        name: "Charlie",
        packSize: 4
      }
    };

    const result = await client.oneOf.v1.pets.create(pet);

    console.log("Created pet using async/await:");
    console.log("  Account SID:", result.accountSid);
    console.log("  Param1:", result.param1);
    if (result.dog) {
      console.log("  Dog name:", result.dog.name);
    }
  } catch (error) {
    console.error("Error in async operation:", (error as Error).message);
  }
}

// Execute async example
createPetAsync();


// Example 6: Building pets dynamically with partial types
console.log("\n=== Example 6: Building Pets Dynamically ===");

function buildVariantOnePet(
  accountSid: string,
  param1: string,
  param2: string,
  dogName: string,
  packSize: number
): Cat {
  return {
    accountSid,
    param1,
    param2,
    dog: {
      type: "dog",
      name: dogName,
      packSize
    }
  };
}

function buildVariantTwoPet(
  accountSid: string,
  object1: string,
  object2: string
): Cat {
  return {
    accountSid,
    object1,
    object2
  };
}

const dynamicPet1 = buildVariantOnePet(
  "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "dynamic1",
  "dynamic2",
  "Luna",
  6
);

const dynamicPet2 = buildVariantTwoPet(
  "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "objA",
  "objB"
);

console.log("Built dynamic pets with helper functions");
console.log("  Variant One pet:", dynamicPet1.param1);
console.log("  Variant Two pet:", dynamicPet2.object1);


// Type Safety Notes
console.log("\n=== TypeScript Benefits with oneOf ===");
console.log(`
TypeScript provides several benefits when working with oneOf:

1. Autocomplete: Your IDE suggests all possible fields from both variants
2. Type Checking: Compile-time errors if you use wrong types
3. Optional Safety: All variant fields are typed as optional (?)
4. Type Guards: You can create functions to discriminate variants
5. Refactoring: Rename fields safely across your codebase

Best Practice: Create separate builder functions or type guards
for each variant to maintain semantic correctness.
`);
