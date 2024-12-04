export default function Loading({isProject}) {
  return (
    <>
      <div className={` ${isProject ? 'mt-20' : 'mt-10'} grid sm:grid-cols-2 xl:grid-cols-2 gap-7 animate-pulse`}>
        <div class="group relative mb-2 animate-pulse">
          <div class="h-48 w-full overflow-hidden rounded-xl">
            <div class="h-full w-full bg-gray-200"></div>
          </div>
          <div class="mt-8">
            <div class="flex gap-4">
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
            </div>
            <div class="mt-2">
              <h2 class="h-6 bg-gray-200 rounded w-3/4"></h2>
            </div>
          </div>
        </div>

        <div class="group relative mb-2 animate-pulse">
          <div class="h-48 w-full overflow-hidden rounded-xl">
            <div class="h-full w-full bg-gray-200"></div>
          </div>
          <div class="mt-8">
            <div class="flex gap-4">
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
            </div>
            <div class="mt-2">
              <h2 class="h-6 bg-gray-200 rounded w-3/4"></h2>
            </div>
          </div>
        </div>

        <div class="group relative mb-2 animate-pulse">
          <div class="h-48 w-full overflow-hidden rounded-xl">
            <div class="h-full w-full bg-gray-200"></div>
          </div>
          <div class="mt-8">
            <div class="flex gap-4">
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
            </div>
            <div class="mt-2">
              <h2 class="h-6 bg-gray-200 rounded w-3/4"></h2>
            </div>
          </div>
        </div>

        <div class="group relative mb-2 animate-pulse">
          <div class="h-48 w-full overflow-hidden rounded-xl">
            <div class="h-full w-full bg-gray-200"></div>
          </div>
          <div class="mt-8">
            <div class="flex gap-4">
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
              <div class="inline-block rounded-full bg-gray-200 px-6 py-1 text-sm"></div>
            </div>
            <div class="mt-2">
              <h2 class="h-6 bg-gray-200 rounded w-3/4"></h2>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
