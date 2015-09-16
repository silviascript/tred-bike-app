class RidesController < ApplicationController

  def index
    @rides = Ride.all
    render layout: 'application', text: ''

    @geojson = Array.new
    # mapbox functionality to be revised and implemented at a later time. beepbop.
    # @rides.each do |ride|
    # @geojson << {
    #   type: 'Feature',
    #   geometry: {
    #     type: 'Point',
    #     coordinates: [ride.longitude, ride.latitude]
    #   },
    #   properties: {
    #     title: ride.title,
    #     address: ride.street,
    #     :'marker-color' => '#00607d',
    #     :'marker-symbol' => 'circle',
    #     :'marker-size' => 'medium'
    #   }
    # }
    # end
  end

  def show
    @ride = Ride.find(params[:id])
    render status: 200, json: @ride.to_json
  end

  def create
    @ride = Ride.new(ride_params)
    if @ride.save
      render json: @ride.to_json, status: 200
    end
  end

  def update
    @ride = Ride.find(params[:id])
    if @ride.update(ride_params)
      render json: @ride.to_json, status: 200
    end
  end

  def destroy
    @ride = Ride.find(params[:id])
    if @ride.destroy
      render json: @ride.to_json, status: 200
    end
  end

  private
  def ride_params
    params.require(:ride).permit(:title)
  end

end
