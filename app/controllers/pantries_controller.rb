class PantriesController < ApplicationController
  before_action :set_pantry, only: [:show, :update ]


  def index
    @pantry = Pantry.all

    render json: @pantry
  end


  def show
    render json: @pantry
  end

  def update 
    if @pantry.update(pantry_params)
      render json: @pantry
    else
      render json: @pantry.errors, status: :unprocessable_entity
    end
  end


  def create
    @pantry = Pantry.new(pantry_params)

    if @pantry.save
      render json: @pantry
    else
      render json: @pantry.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pantry
      @pantry = Pantry.find(params[:id])
    end

    def pantry_params 
      params.require(:pantry).permit( :status, :time_left, :food_id)
    end
end
