export default function FilterCheckboxes(){
    return(
        <div class="flex flex-col mt-8">
            <h3 className="text-blitzRed">FILTERS</h3>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">European-Cut</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">Japanese-Cut</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">100% cotton</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">Polycotton</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">Tournament</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">WKF</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">Kata</label>
            </div>
            <div>
                <input type="checkbox" className="border-none bg-blitzLighterRed text-blitzRed focus:ring-0"/>
                <label className="mx-2 align-middle">Kumite</label>
            </div>
        </div>
    )
}