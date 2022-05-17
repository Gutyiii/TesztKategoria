<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Tesztkérdés') }}
        </h2>
    </x-slot>
    <main>
        <form>
            <select>
                <option>...Válaszd ki!...</option>
            </select>
            <div id="szulo">
            
                <div class="sablon">
                    <h1 class="kerdes">Kérdés</h1><br>
                    <button class="v1">Válasz1</button>
                    <button class="v2">Válasz2</button>
                    <button class="v3">Válasz3</button>
                    <button class="v4">Válasz4</button>
                </div>
            </div>
        </form>
    </main>
</x-app-layout>